import { DeviceCollectionType } from '@src/models/device'

const fetchDevices = async (): Promise<DeviceCollectionType> => {
  return [
    {
      id: '1',
      name: 'Device 1',
      address: '10.0.0.1'
    },
    {
      id: '2',
      name: 'Device 2',
      address: '10.0.0.2'
    }
  ]
}

export default {
  fetchDevices
}
