import api from '~/services/api';
import { definitions } from '~/types/supabase';
import { AddTodo } from './validations';

export const initialize = () => api.post('/lists/init');

export const create = (addTodo: AddTodo) => api.post('/lists/create', addTodo);

export const getLists = () => api.get<definitions['lists'][]>('/lists');
