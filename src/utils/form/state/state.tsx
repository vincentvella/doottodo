import { SchemaOf } from 'yup';

export type FormState = {
  initialState: Record<string, unknown>;
  fields: Record<string, unknown>;
  data: Record<string, unknown>;
  errors: Record<string, unknown>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValidating: boolean;
  submissions: number;
  schema?: SchemaOf<object>;
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
