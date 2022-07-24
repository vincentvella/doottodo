import zod from 'zod';

export type FormState = {
  initialState: Record<string, unknown>;
  fields: Record<string, unknown>;
  data: Record<string, unknown>;
  errors: Record<string, unknown>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValidating: boolean;
  submissions: number;
  schema?: zod.ZodSchema;
};

export const initialFormState: FormState = {
  data: {},
  fields: {},
  errors: {},
  initialState: {},
  touched: {},
  schema: undefined,
  isSubmitting: false,
  isValidating: false,
  submissions: 0,
};
