import React from 'react';
import { BottomSheetBackdrop, BottomSheetBackdropProps } from '~@gorhom/bottom-sheet';

const Backdrop: React.FC<BottomSheetBackdropProps> = (props) => (
  <BottomSheetBackdrop
    {...props}
    disappearsOnIndex={-1}
    appearsOnIndex={0}
    enableTouchThrough={false}
    pressBehavior="close"
    opacity={0.5}
  />
);

export default Backdrop;
