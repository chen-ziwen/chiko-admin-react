import localforage from 'localforage';

export type StorageType = 'local' | 'session';

function createStorage<T extends object>(type: StorageType, storagePrefix: string) {
  const stg = type === 'session' ? window.sessionStorage : window.localStorage;

  const storage = {
    clear() {
      stg.clear();
    },
    get<K extends keyof T>(key: K): T[K] | null {
      const json = stg.getItem(`${storagePrefix}${<string>key}`);

      if (json) {
        let storageData: T[K] | null = null;

        try {
          storageData = JSON.parse(json);
        } catch (e) {
          console.error(`Error parsing JSON for key "${<string>key}":`, e);
        }

        if (storageData) {
          return storageData as T[K];
        }
      }

      stg.removeItem(`${storagePrefix}${<string>key}`);

      return null;
    },

    remove(key: keyof T) {
      stg.removeItem(`${storagePrefix}${<string>key}`);
    },

    set<K extends keyof T>(key: K, value: T[K]) {
      const json = JSON.stringify(value);

      stg.setItem(`${storagePrefix}${<string>key}`, json);
    }
  };

  return storage;
}

type LocalForage<T extends object> = Omit<typeof localforage, 'getItem' | 'removeItem' | 'setItem'> & {
  getItem<K extends keyof T>(key: K, callback?: (err: any, value: T[K] | null) => void): Promise<T[K] | null>;

  removeItem(key: keyof T, callback?: (err: any) => void): Promise<void>;

  setItem<K extends keyof T>(key: K, value: T[K], callback?: (err: any, value: T[K]) => void): Promise<T[K]>;
};

type LocalforageDriver = 'indexedDB' | 'local' | 'webSQL';

function createLocalforage<T extends object>(driver: LocalforageDriver) {
  const driverMap: Record<LocalforageDriver, string> = {
    indexedDB: localforage.INDEXEDDB,
    local: localforage.LOCALSTORAGE,
    webSQL: localforage.WEBSQL
  };

  localforage.config({
    driver: driverMap[driver]
  });

  return localforage as LocalForage<T>;
}

export { createLocalforage, createStorage };
