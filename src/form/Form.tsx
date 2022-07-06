import * as React from 'react';
import { Provider } from 'jotai';
import * as yup from 'yup';
import { ActionContextProvider } from './ActionContext';
import { useSetFormData, useSetInitialValues, useUpdateSchema } from './hooks';

type FormProps<T extends object, Schema extends yup.SchemaOf<T>> = {
  schema: Schema;
  onSuccess: (data: T) => void | Promise<void>;
  onError: (error: yup.ValidationError) => void | Promise<void>;
  initialValues?: Partial<T>;
  defaultValues?: Partial<T>;
  children: React.ReactNode;
};

const Form = <T extends object, S extends yup.SchemaOf<T>>({
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

const InitialState = <T extends object, S extends yup.SchemaOf<T>>({
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
    // Set yup schema into jotai when form mounts
    setSchema(schema);
  }, [setSchema, schema]);

  return null;
};

export default Form;
