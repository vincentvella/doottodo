import { atom, useAtomValue } from 'jotai';

export const activeList = atom<string | null>(null);

export const useIsActiveList = (id: string) => useAtomValue(activeList) === id;
