import { DeviceCollectionType } from '@src/models/device'

declare module 'fastify' {
  export interface FastifyInstance {
    fetchDevices: () => Promise<DeviceCollectionType>
    zFetch: () => Promise<string>
  }
}