import React, { useContext } from 'react';
import zod from 'zod';

type Actions = {
  onSuccess: (data: zod.infer<zod.Schema>) => void | Promise<void>;
  onError: (error: zod.ZodError) => void | Promise<void>;
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
