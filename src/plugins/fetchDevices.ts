import ExternalDevice from '@src/external/device'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import fp from 'fastify-plugin'

async function fetchDevicesPlugin(
  fastify: FastifyInstance,
  _opts: FastifyPluginOptions,
): Promise<void> {
  const zzz = await fastify.zFetch()
  console.log('zzz', zzz)
  fastify.decorate('fetchDevices', ExternalDevice.fetchDevices)
}

export default fp(fetchDevicesPlugin, {
  name: 'fetchDevices',
  dependencies: ['zFetch']
})