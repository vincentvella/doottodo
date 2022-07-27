import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { SlideInUp } from 'react-native-reanimated';
import DelayedEntrance from '~/components/DelayedEntrance';
import useElementColor from '~/hooks/useElementColor';
import { FlatList, Text } from '~/react-native';
import { FlatListProps } from '~/types/flatlist';
import { definitions } from '~/types/supabase';
import { useActiveList } from '../state/activeList';
import AddListButton from './AddListButton';
import BubbleHighlight from './BubbleHighlight';

const ListsList = FlatList<definitions['lists']>();

type ListsListProps = FlatListProps<definitions['lists']>;

const keyExtractor: ListsListProps['keyExtractor'] = ({ id }) => id;

type ItemProps = definitions['lists'] & {
  index: number;
};

const Item = (props: ItemProps) => {
  const [isActive, setIsActive] = useActiveList(props.id);
  const color = useElementColor(isActive);
  return (
    <DelayedEntrance delay={props.index * 100} key={props.id}>
      <Animated.View entering={SlideInUp}>
        <TouchableOpacity onPress={setIsActive}>
          <BubbleHighlight visible={isActive}>
            <Text className="text-lg px-2" style={{ color }}>
              {props.title}
            </Text>
          </BubbleHighlight>
        </TouchableOpacity>
      </Animated.View>
    </DelayedEntrance>
  );
};

const renderItem: ListsListProps['renderItem'] = ({ item, index }) => (
  <Item index={index} {...item} />
);

const ListSelector: React.FC<{ data: definitions['lists'][]; loading: boolean }> = ({
  data,
  loading,
}) => {
  return (
    <ListsList
      horizontal
      className="p-4"
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListFooterComponent={
        !loading && data
          ? () => (
              <DelayedEntrance delay={(data.length + 1) * 100}>
                <AddListButton />
              </DelayedEntrance>
            )
          : null
      }
    />
  );
};

export default ListSelector;
