import api from '~/services/api';
import { definitions } from '~/types/supabase';
import { AddList, AddTodo } from './validations';

export const initialize = () => api.post('/lists/init');

export const createList = (addList: AddList) => api.post('/lists/create', addList);

export const getLists = () => api.get<definitions['lists'][]>('/lists');

export const createTask = (addTodo: AddTodo) => api.post('/tasks/create', addTodo);

export const getTasksForList = (listId: string) =>
  api.get<definitions['tasks'][]>(`/lists/${listId}`);
