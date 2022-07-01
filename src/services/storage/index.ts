import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

export const Storage = {
  clear: () => storage.clearAll(),
  getAllKeys: () => storage.getAllKeys(),
  getItem: (key: string) => new Promise<string | null>(resolve => resolve(storage.getString(key) ?? null)),
  getItemSync: (key: string) => storage.getString(key),
  multiGet: (keys: string[]) => new Promise<(string | null)[]>(resolve => {
    const values = []
    for (const key in keys) {
      values.push(storage.getString(key) ?? null)
    }
    resolve(values)
  })
  ,
  multiRemove: (keys: string[]) =>
    new Promise<void>(resolve => {
      for (const key in keys) {
        storage.delete(key)
      }
      resolve()
    }),
  multiSet: (keyValuePairs: [[string, string]]) =>
    new Promise<void>(resolve => {
      for (const keyValue in keyValuePairs) {
        storage.set(keyValue[0], keyValue[1])
      }
      resolve()
    }),
  removeItem: (key: string) => Promise.resolve(storage.delete(key)),
  removeItemSync: (key: string) => storage.delete(key),
  setItem: (key: string, value: string) => Promise.resolve(storage.set(key, value)),
  setItemSync: (key: string, value: string) => storage.set(key, value),
}

