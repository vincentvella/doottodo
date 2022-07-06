import * as yup from 'yup';
import React, { useContext } from 'react';
import { TypedSchema } from 'yup/lib/util/types';

type Actions = {
  onSuccess: (data: yup.InferType<TypedSchema>) => void | Promise<void>;
  onError: (error: yup.ValidationError) => void | Promise<void>;
};

const ActionContext = React.createContext<Actions | undefined>(undefined);

export const ActionContextProvider: React.FC<{ actions: Actions; children: React.ReactNode }> = ({
  children,
  actions,
}) => <ActionContext.Provider value={actions}>{children}</ActionContext.Provider>;

export const useOnError = () => {
  const actions = useContext(ActionContext);
  if (actions === undefined) {
    throw new Error('useOnError used outside of ActionContextProvider');
  }
  return actions.onError;
};

export const useOnSuccess = () => {
  const actions = useContext(ActionContext);
  if (actions === undefined) {
    throw new Error('useOnSuccess used outside of ActionContextProvider');
  }
  return actions.onSuccess;
};

export const useFormActions = () => {
  const actions = useContext(ActionContext);
  if (actions === undefined) {
    throw new Error('useFormActions used outside of ActionContextProvider');
  }
  return actions;
};
