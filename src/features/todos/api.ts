import api from '~/services/api';

export const initialize = () => api.post('/lists/init');

export const getLists = () => api.get('/lists');
