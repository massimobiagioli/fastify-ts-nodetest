import { DeviceCollectionType } from '@src/models/device'

declare module 'fastify' {
  interface FastifyInstance {
    fetchDevices: () => Promise<DeviceCollectionType>
  }
}
