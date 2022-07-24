import { atom } from 'jotai';
import zod from 'zod';
import { FormState, initialFormState } from './state';

export const formState = atom<FormState>(initialFormState);

export const initialState = atom<Record<string, unknown>, Record<string, unknown>>(
  (get) => get(formState).initialState,
  (get, set, initialState) => {
    const state = get(formState);
    set(formState, { ...state, initialState });
    return { ...state, initialState };
  },
);

export const fieldRegistry = atom<Record<string, unknown>, Record<string, unknown>>(
  (get) => get(formState).fields,
  (get, set, fields) => {
    const state = get(formState);
    set(formState, { ...state, fields });
    return { ...state, fields };
  },
);

export const formData = atom<Record<string, unknown>, Record<string, unknown>>(
  (get) => get(formState).data,
  (get, set, data) => {
    const state = get(formState);
    set(formState, { ...state, data });
    return { ...state, data };
  },
);

export const formErrors = atom<Record<string, unknown>, Record<string, unknown>>(
  (get) => get(formState).errors,
  (get, set, errors) => {
    const state = get(formState);
    set(formState, { ...state, errors });
    return { ...state, errors };
  },
);

export const formTouched = atom<Record<string, boolean>, Record<string, boolean>>(
  (get) => get(formState).touched,
  (get, set, touched) => {
    const state = get(formState);
    set(formState, { ...state, touched });
    return { ...state, touched };
  },
);

export const formSchema = atom<zod.ZodSchema | undefined, zod.ZodSchema | undefined>(
  (get) => get(formState).schema,
  (get, set, schema) => {
    const state = get(formState);
    set(formState, { ...state, schema });
    return { ...state, schema };
  },
);

export const isValidating = atom<boolean, boolean>(
  (get) => get(formState).isValidating,
  (get, set, isValidating) => {
    const state = get(formState);
    set(formState, { ...state, isValidating });
    return { ...state, isValidating };
  },
);

export const isSubmitting = atom<boolean, boolean>(
  (get) => get(formState).isSubmitting,
  (get, set, isSubmitting) => {
    const state = get(formState);
    set(formState, { ...state, isSubmitting });
    return { ...state, isSubmitting };
  },
);
