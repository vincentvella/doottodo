import * as React from 'react';
import { useUpdateAtom } from 'jotai/utils';
import { FieldActions } from './field-types';
import { useField } from './hooks';
import { field } from './state/selectors';

declare type Awaited<T> = T extends Promise<infer V> ? Awaited<V> : T;

const useFieldRef = <U extends object, T>(
  ref: React.Ref<unknown>,
  name: string,
): [React.RefObject<U & FieldActions>, [Awaited<T>, never]] => {
  const fieldRef = React.useRef<U & FieldActions>(null);
  const fieldValue = useField<T>(name);

  const setFieldRef = useUpdateAtom(field(name));

  React.useImperativeHandle(ref, () => ({
    focus: () => fieldRef.current?.focus(),
  }));

  const getValue = React.useCallback(() => fieldValue[0], [fieldValue]);

  React.useEffect(() => {
    setFieldRef(getValue);
  });

  return [fieldRef, fieldValue];
};

export default useFieldRef;
