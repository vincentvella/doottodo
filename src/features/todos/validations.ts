import zod from 'zod';

export type AddList = zod.infer<typeof addList>;
export type AddTodo = zod.infer<typeof addTodo>;

export const addList = zod.object({
  title: zod.string(),
});

export const addTodo = zod.object({
  summary: zod.string(),
  started: zod.boolean().optional(),
});
