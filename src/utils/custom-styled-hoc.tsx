import { StyledProps } from 'nativewind';
import React from 'react';

type InferRef<T> = T extends React.RefAttributes<infer R> | React.ClassAttributes<infer R>
  ? R
  : unknown;
type ForwardRef<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;
const decorationMap = {
  thin: 'font-metropolis-thin',
  extralight: 'font-metropolis-x-lgt',
  light: 'font-metropolis-lgt',
  normal: 'font-metropolis',
  medium: 'font-metropolis-med',
  semibold: 'font-metropolis-semi-bld',
  bold: 'font-metropolis-bld',
  extrabold: 'font-metropolis-x-bld',
  black: 'font-metropolis-blk',
};
const decorators = Object.keys(decorationMap) as (keyof typeof decorationMap)[];

export function custom<T>(
  Component: React.ComponentType<T>,
): ForwardRef<InferRef<T>, StyledProps<T>> {
  const CustomComponent = (
    {
      decoration,
      className,
      ...props
    }: StyledProps<unknown> & { decoration?: keyof typeof decorationMap },
    ref: React.ForwardedRef<unknown>,
  ) => {
    const weight = React.useMemo(() => {
      const fontModifiers = className?.split(' ').reduce((acc, a) => {
        const att = a.trim();
        if (att.startsWith('font-')) {
          acc.push(att.replace('font-', ''));
        }
        return acc;
      }, [] as string[]) as typeof decorators | undefined;
      const modifier = fontModifiers?.find((a) => decorators.includes(a));
      let weight = decorationMap[modifier || decoration || 'normal'];
      if (className?.includes('italic')) {
        return weight + '-it';
      }
      return weight;
    }, [className, decoration]);
    const name = React.useMemo(() => [className, weight].join(' '), [className, weight]);
    const element = React.createElement(Component, {
      ...props,
      className: name,
      ref,
    } as unknown as T);
    return element;
  };
  return React.forwardRef(CustomComponent) as ForwardRef<InferRef<T>, StyledProps<T>>;
}
