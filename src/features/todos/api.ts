import api from '~/services/api';
import { definitions } from '~/types/supabase';
import { AddList } from './validations';

export const initialize = () => api.post('/lists/init');

export const create = (addList: AddList) => api.post('/lists/create', addList);

export const getLists = () => api.get<definitions['lists'][]>('/lists');
