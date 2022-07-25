import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import React from 'react';
import { initialize } from '../api';
import { activeList as activeListAtom } from '../state/activeList';
import useLists from './useLists';

function useInitializeUserLists(result: ReturnType<typeof useLists>) {
  const [activeList, setActiveList] = useAtom(activeListAtom);
  const { refetch, isFetched, isError, data } = result;
  const initializeLists = useMutation(initialize, { onSuccess: () => refetch() });

  React.useEffect(() => {
    if (isFetched && !isError && Array.isArray(data?.data) && !data?.data.length) {
      initializeLists.mutate();
    }
  }, [isError, isFetched, data]);

  React.useEffect(() => {
    if (data?.data[0] && !activeList) {
      setActiveList(data?.data[0].id);
    }
  }, [data, activeList]);
}

export default useInitializeUserLists;
