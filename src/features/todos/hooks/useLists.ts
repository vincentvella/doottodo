import { useQuery } from '@tanstack/react-query';
import { getLists } from '../api';

const useLists = () => useQuery(['lists'], getLists);

export default useLists;
