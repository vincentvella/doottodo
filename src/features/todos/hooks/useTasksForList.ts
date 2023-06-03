import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { getTasksForList } from '../api';
import { activeList } from '../state/activeList';

const useTasksForList = () => {
  const listId = useAtomValue(activeList);
  return useQuery(['tasks', listId], () => getTasksForList(listId || ''), { enabled: !!listId });
};

export default useTasksForList;
