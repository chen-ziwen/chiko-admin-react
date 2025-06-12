import { createLocalforage, createStorage, StorageType } from '@chiko-admin/utils';

const storagePrxfix = import.meta.env.VITE_STORAGE_PREFIX || '';

const localStg = createStorage<StorageType.Local>('local', storagePrxfix);
const sessionStg = createStorage<StorageType.Session>('session', storagePrxfix);
const localforage = createLocalforage<StorageType.Local>("local");

export {
    localStg,
    sessionStg,
    localforage,
}