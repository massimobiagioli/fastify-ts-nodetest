import ExternalDevice from '@src/external/device'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import fp from 'fastify-plugin'

async function fetchDevicesPlugin(
  fastify: FastifyInstance,
  _opts: FastifyPluginOptions,
): Promise<void> {
  fastify.decorate('fetchDevices', ExternalDevice.fetchDevices)
}

export default fp(fetchDevicesPlugin)