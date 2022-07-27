import zod from 'zod';

export type AddTodo = zod.infer<typeof addTodo>;

export const addTodo = zod.object({
  title: zod.string(),
});
