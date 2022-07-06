// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const nextInputFocus = (ref: any) => () => {
  if (ref) {
    ref.current.focus();
  }
};
