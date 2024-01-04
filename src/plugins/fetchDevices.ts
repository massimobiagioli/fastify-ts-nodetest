import ExternalDevice from '@src/external/device'
import { DeviceCollectionType } from '@src/models/device'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import fp from 'fastify-plugin'

declare module 'fastify' {
  interface FastifyInstance {
    fetchDevices: () => Promise<DeviceCollectionType>
  }
}

async function fetchDevicesPlugin(
  fastify: FastifyInstance,
  _opts: FastifyPluginOptions,
): Promise<void> {
  fastify.decorate('fetchDevices', ExternalDevice.fetchDevices)
}

export default fp(fetchDevicesPlugin)