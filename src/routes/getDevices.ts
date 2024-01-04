import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { Static } from '@sinclair/typebox'
import { DeviceCollection } from '@src/models/device'

export type GetDevicesResponseType = Static<typeof DeviceCollection>

export default async function (
  fastify: FastifyInstance,
  _opts: FastifyPluginOptions
): Promise<void> {
  fastify.get<{ Reply: GetDevicesResponseType }>(
    '/device',
    async (_request, _reply) => {
      return await fastify.fetchDevices()
    }
  )
}
