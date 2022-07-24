import z from 'zod';
import { useAtom, useAtomValue } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import React from 'react';
import set from 'lodash.set';
import { useFormActions } from './ActionContext';
import {
  formData,
  formErrors,
  formSchema,
  formState,
  initialState,
  isSubmitting,
  isValidating,
} from './state/atoms';
import { fieldData, fieldError } from './state/selectors';
import { initialFormState } from './state/state';
import FormError from './error';

// Form Actions
export const useResetForm = () => {
  const initialValues = useAtomValue(initialState);
  const updateFormState = useUpdateAtom(formState);
  return React.useCallback(() => {
    updateFormState({
      ...initialFormState,
      data: initialValues || initialFormState.initialState,
    });
  }, [initialValues, updateFormState]);
};

export const useSubmit = () => {
  const data = useAtomValue(formData);
  const reset = useResetForm();
  const { onError, onSuccess } = useFormActions();
  const updateIsValidating = useUpdateAtom(isValidating);
  const updateIsSubmitting = useUpdateAtom(isSubmitting);
  const updateFormErrors = useUpdateAtom(formErrors);
  const schema = useSchemaValue();

  return React.useCallback(async () => {
    try {
      updateIsSubmitting(true);
      if (schema) {
        updateIsValidating(true);
        schema.parse(data);
        updateFormErrors({});
        updateIsValidating(false);
      }
      await onSuccess(data);
      reset();
    } catch (error: unknown) {
      if (error instanceof FormError) {
        updateFormErrors({ _form: error.message });
      } else if (error instanceof z.ZodError) {
        const formErrors = error.issues.reduce((obj, e) => {
          set(obj, e.path, e.message);
          return obj;
        }, {} as Record<string, string>);
        updateFormErrors(formErrors);
        onError(error);
      }
    } finally {
      updateIsValidating(false);
      updateIsSubmitting(false);
    }
  }, [
    onSuccess,
    data,
    schema,
    onError,
    updateFormErrors,
    updateIsSubmitting,
    updateIsValidating,
    reset,
  ]);
};

export const useSetFormData = () => useUpdateAtom(formData);
export const useSetInitialValues = () => useUpdateAtom(initialState);

// Field data
export const useField = <T>(fieldName: string) => useAtom<T>(fieldData(fieldName));
export const useFieldValue = (name: string) => useAtomValue(fieldData(name));
export const useUpdateFieldValue = (name: string) => useUpdateAtom(fieldData(name));

export const useFieldError = <T = string>(fieldName: string) =>
  useAtomValue<T>(fieldError(fieldName));

// Schema
export const useSchemaValue = () => useAtomValue(formSchema);
export const useUpdateSchema = () => useUpdateAtom(formSchema);

export const useIsSubmitting = () => useAtomValue(isSubmitting);
