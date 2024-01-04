import { Static, Type } from "@sinclair/typebox"

export const Device = Type.Object({
    id: Type.String(),
    name: Type.String(),
    address: Type.String(),
})

export const DeviceCollection = Type.Array(Device)

export type DeviceCollectionType = Static<typeof DeviceCollection>