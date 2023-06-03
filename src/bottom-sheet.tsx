import React, { ForwardRefExoticComponent, PropsWithoutRef, Ref, RefAttributes } from 'react';
import { styled, StyledProps } from 'nativewind';
import OGBottomSheet, {
  BottomSheetView as OGBottomSheetView,
  BottomSheetTextInput as OGBottomSheetTextInput,
  BottomSheetProps,
} from '~@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/src/types';

declare type ForwardRef<T, P> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

const BottomSheetWrapper = React.forwardRef(
  (
    { backgroundStyle, handleStyle, ...props }: BottomSheetProps,
    ref: Ref<BottomSheetMethods> | undefined,
  ) => (
    <OGBottomSheet
      {...props}
      ref={ref}
      handleStyle={handleStyle}
      backgroundStyle={backgroundStyle}
    />
  ),
);

export type BottomSheet = BottomSheetMethods;
export type CorrectedBottomSheet = ForwardRef<
  unknown,
  Omit<StyledProps<BottomSheetProps>, 'backgroundStyle'> & {
    backgroundStyle?: string;
    handleStyle?: string;
  }
>;

// Reanimated Bindings
export const BottomSheet = styled(BottomSheetWrapper, {
  props: {
    backgroundStyle: true,
  },
});
export const BottomSheetView = styled(OGBottomSheetView, 'bg-neutral-100 dark:bg-neutral-800');
export const BottomSheetTextInput = styled(
  OGBottomSheetTextInput,
  'text-bg-neutral-900 dark:text-neutral-100',
);
