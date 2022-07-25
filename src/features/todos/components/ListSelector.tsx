import React from 'react';
import useElementColor from '~/hooks/useElementColor';
import { FlatList, Text, View } from '~/react-native';
import { FlatListProps } from '~/types/flatlist';
import { definitions } from '~/types/supabase';
import { useIsActiveList } from '../state/activeList';
import AddListButton from './AddListButton';
import BubbleHighlight from './BubbleHighlight';

const ListsList = FlatList<definitions['lists']>();

type ListsListProps = FlatListProps<definitions['lists']>;

const keyExtractor: ListsListProps['keyExtractor'] = ({ id }) => id;

const Item = (props: definitions['lists']) => {
  const isActive = useIsActiveList(props.id);
  const color = useElementColor(isActive);
  return (
    <View key={props.id}>
      <BubbleHighlight visible={isActive}>
        <Text className="text-lg px-2" style={{ color }}>
          {props.title}
        </Text>
      </BubbleHighlight>
    </View>
  );
};

const renderItem: ListsListProps['renderItem'] = ({ item }) => <Item {...item} />;

const ListSelector: React.FC<{ data: definitions['lists'][] }> = ({ data }) => {
  return (
    <ListsList
      horizontal
      className="p-4"
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListFooterComponent={data && AddListButton}
    />
  );
};

export default ListSelector;
