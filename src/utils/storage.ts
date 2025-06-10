import { createLocalforage, createStorage, StorageType } from '@chiko-admin-react/utils';

const storagePrxfix = import.meta.env.VITE_STORAGE_PREFIX || '';

export const localStg = createStorage<StorageType.Local>('local', storagePrxfix);

export const sessionStg = createStorage<StorageType.Session>('session', storagePrxfix);

export const localforage = createLocalforage<StorageType.Local>("local");