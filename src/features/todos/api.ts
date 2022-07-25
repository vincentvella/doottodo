import api from '~/services/api';
import { definitions } from '~/types/supabase';

export const initialize = () => api.post('/lists/init');

export const getLists = () => api.get<definitions['lists'][]>('/lists');
