import * as React from 'react';
import { Provider } from 'jotai';
import { ZodSchema } from 'zod';
import { ActionContextProvider } from './ActionContext';
import { useSetFormData, useSetInitialValues, useUpdateSchema } from './hooks';

export type FormProps<T extends object, Schema extends ZodSchema<T>> = {
  schema: Schema;
  onSuccess: (data: T) => void | Promise<void>;
  onError: (error: Zod.ZodError) => void | Promise<void>;
  initialValues?: Partial<T>;
  defaultValues?: Partial<T>;
  children: React.ReactNode;
};

const Form = <T extends object, S extends ZodSchema<T>>({
  children,
  onError,
  onSuccess,
  ...initialProps
}: FormProps<T, S>) => {
  const actions = React.useMemo(() => ({ onError, onSuccess }), [onError, onSuccess]);

  return (
    <ActionContextProvider actions={actions}>
      <Provider>
        <InitialState {...initialProps} />
        <>{children}</>
      </Provider>
    </ActionContextProvider>
  );
};

const InitialState = <T extends object, S extends ZodSchema<T>>({
  schema,
  initialValues,
}: Pick<FormProps<T, S>, 'schema' | 'initialValues'>) => {
  const setFormValues = useSetFormData();
  const setInitialValues = useSetInitialValues();
  const setSchema = useUpdateSchema();

  React.useEffect(() => {
    // Set initial state when the form mounts
    if (initialValues) {
      setFormValues(initialValues);
      setInitialValues(initialValues);
    }
  }, [initialValues, setFormValues, setInitialValues]);

  React.useEffect(() => {
    // Set zod schema into jotai when form mounts
    setSchema(schema);
  }, [setSchema, schema]);

  return null;
};

export default Form;
