import { atom, SetStateAction, useAtom, useAtomValue } from 'jotai';
import React from 'react';

export const activeList = atom<string | null>(null);

export const useIsActiveList = (id: string) => useAtomValue(activeList) === id;
export const useActiveList = (id: string): [boolean, () => void] => {
  const [active, setActive] = useAtom(activeList);
  const makeActive = React.useCallback(() => {
    setActive(id);
  }, [id]);
  return [active === id, makeActive];
};
