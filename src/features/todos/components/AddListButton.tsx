import React, { useCallback, useMemo, useRef } from 'react';
import { Portal } from '~@gorhom/portal';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useElementColor from '~/hooks/useElementColor';
import { Text, TouchableOpacity, View } from '~/react-native';
import { BottomSheet, BottomSheetView } from '~/bottom-sheet';
import { Form } from '~/utils/form';
import BottomSheetTextInput from '~/components/form/base/bottom-sheet-text-input';
import { BottomSheetBackdrop, BottomSheetBackdropProps } from '~@gorhom/bottom-sheet';
import Button from '~/components/form/base/button';
import { Platform } from 'react-native';
import { AddTodo, addTodo } from '../validations';
import { create, getLists } from '../api';
import { useMutation, useQuery } from '@tanstack/react-query';

const Backdrop: React.FC<BottomSheetBackdropProps> = (props) => {
  if (Platform.OS === 'web') {
    return null;
  }
  return (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      enableTouchThrough={false}
      pressBehavior="close"
      opacity={0.5}
    />
  );
};

const AddListButton = () => {
  const color = useElementColor();
  const { refetch } = useQuery(['lists'], getLists, { enabled: false });
  const { mutate } = useMutation(create, {
    onSuccess: () => {
      refetch();
    },
  });
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const handlePress = useCallback(() => {
    sheetRef.current?.snapToIndex(0);
  }, []);

  const handleClose = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleOnSuccess = useCallback(
    (data: AddTodo) => {
      mutate(data);
      handleClose();
    },
    [handleClose],
  );

  return (
    <>
      <View className="px-3 py-1">
        <TouchableOpacity onPress={handlePress}>
          <FontAwesome name="plus-square-o" color={color} size={21} />
        </TouchableOpacity>
      </View>
      <Portal>
        <BottomSheet
          backgroundStyle="bg-neutral-100 dark:bg-neutral-800"
          ref={sheetRef}
          index={-1}
          backdropComponent={Backdrop}
          snapPoints={snapPoints}
          enablePanDownToClose
        >
          <BottomSheetView className="p-2">
            <View className="w-full flex-row">
              <Text className="flex-1 text-2xl">Add a List</Text>
              <View className="p-1 pr-3">
                <FontAwesome name="close" color={color} size={21} onPress={handleClose} />
              </View>
            </View>
            <Form schema={addTodo} onSuccess={handleOnSuccess} onError={console.error}>
              <BottomSheetTextInput label="Title" name="title" />
              <Button />
            </Form>
          </BottomSheetView>
        </BottomSheet>
      </Portal>
    </>
  );
};

export default AddListButton;
