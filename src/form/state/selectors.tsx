import { atom, WritableAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { fieldRegistry, formData, formErrors, formTouched } from './atoms';

export const fieldTouched = atomFamily<string, WritableAtom<boolean, boolean>>((name: string) =>
  atom(
    (get) => get(formTouched)[name],
    (get, _set, newValue) => {
      const touched = { ...get(formTouched) };
      touched[name] = newValue;
      return touched;
    },
  ),
);

export const fieldData = atomFamily((name: string) =>
  atom(
    (get) => get(formData)[name],
    (get, set, newValue) => {
      const data = get(formData);
      set(formData, { ...data, [name]: newValue });
      return { ...data, [name]: newValue };
    },
  ),
);

export const field = atomFamily((name: string) =>
  atom(
    (get) => get(fieldRegistry)[name],
    (get, set, newValue) => {
      const data = get(fieldRegistry);
      set(fieldRegistry, { ...data, [name]: newValue });
      return { ...data, [name]: newValue };
    },
  ),
);

export const fieldError = atomFamily((name: string) =>
  atom(
    (get) => {
      return get(formErrors)[name];
    },
    (get, set, newValue) => {
      const data = get(formErrors);
      set(formErrors, { ...data, [name]: newValue });
      return { ...data, [name]: newValue };
    },
  ),
);
