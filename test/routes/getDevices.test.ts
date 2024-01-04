import buildApp from '@src/app'
import { FastifyInstance } from 'fastify'
import { describe, it, after, mock } from 'node:test'
import assert from 'assert';
import ExternalDevice from '@src/external/device';

describe('GET /device HTTP', () => {
  let app: FastifyInstance

  const mockDevices = [
    {
      id: 'test',
      name: 'Device Test',
      address: '10.0.2.12',
    },  
  ]

  const mockDevicesFn = mock.fn(async () => mockDevices)

  const mockDevicesErrorFn = mock.fn(async () => {
    throw new Error('Error retrieving devices')
  })

  after(async () => {
    await app.close()
  })

  it('GET /device returns status 200', async () => {    
    mock.method(ExternalDevice, 'fetchDevices', mockDevicesFn)

    app = await buildApp({ logger: false })
    
    const response = await app.inject({
      method: 'GET',
      url: '/api/device',
    })

    assert.strictEqual(response.statusCode, 200)
    assert.deepStrictEqual(JSON.parse(response.payload), mockDevices)
    assert.strictEqual(mockDevicesFn.call.length, 1)
    
    const call = mockDevicesFn.mock.calls[0]
    assert.deepEqual(call.arguments, [])

    mock.reset()
  })

  it('GET /device returns status 500', async () => {    
    mock.method(ExternalDevice, 'fetchDevices', mockDevicesErrorFn)

    app = await buildApp({ logger: false })
    
    const response = await app.inject({
      method: 'GET',
      url: '/api/device',
    })

    const expectedResult = { 
      statusCode: 500, 
      error: 'Internal Server Error', 
      message: 'Error retrieving devices' 
    }

    assert.strictEqual(response.statusCode, 500)
    assert.deepStrictEqual(JSON.parse(response.payload), expectedResult)
    assert.strictEqual(mockDevicesFn.call.length, 1)
    
    const call = mockDevicesFn.mock.calls[0]
    assert.deepEqual(call.arguments, [])

    mock.reset()
  })
})