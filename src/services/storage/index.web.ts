const noop = (...args: any[]) => noop;
const storage = !!global?.window
  ? localStorage
  : ({
      setItem: noop,
      clear: noop,
      length: 0,
      getItem: (i: string) => i,
      key: (i: number) => null,
      removeItem: noop,
    } as Storage);

const clear = storage.clear.bind(storage);
const getItem = storage.getItem.bind(storage);
const setItem = storage.setItem.bind(storage);
const removeItem = storage.removeItem.bind(storage);

const Storage = {
  clear,
  getAllKeys: () =>
    new Promise((resolve) => {
      const numberOfKeys = storage.length;
      const keys: string[] = [];
      for (let i = 0; i < numberOfKeys; i++) {
        const key = storage.key(i) ?? '';
        keys.push(key);
      }
      resolve(keys);
    }),
  getItem,
  getItemSync: getItem,
  multiGet: (keys: string[]) =>
    new Promise((resolve) => {
      const items = keys.map(getItem);
      resolve(items.map((item, i) => [keys[i], item]));
    }),
  multiRemove: (keys: string[]) =>
    new Promise<void>((resolve) => {
      keys.map(removeItem);
      resolve();
    }),
  multiSet: (keyValuePairs: [[string, string]]) =>
    new Promise<void>((resolve) => {
      keyValuePairs.map(([key, value]) => setItem(key, value));
      resolve();
    }),
  removeItem,
  removeItemSync: removeItem,
  setItem,
  setItemSync: setItem,
};

export default Storage;
