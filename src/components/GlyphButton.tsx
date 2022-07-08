import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from '~/react-native';
import { Glyph } from '~/types/glyphs';
import { Link } from 'solito/link';
import useElementColor from '~/hooks/useElementColor';

export type GlyphButtonProps = {
  title: string;
  logo: Glyph;
  route: string;
};

const GlyphButton: React.FC<GlyphButtonProps> = ({ route, logo, title }) => {
  const color = useElementColor();
  return (
    <View className=" space-2 ">
      <Link href={route}>
        <View className="rounded-2xl flex-row p-4 items-center w-full flex-1 border-dark dark:border-light border">
          <View className="absolute left-4">
            <FontAwesome color={color} name={logo} size={24} style={{ marginTop: -4 }} />
          </View>
          <Text className="w-full capitalize text-2xl font-medium text-center">{title}</Text>
        </View>
      </Link>
    </View>
  );
};

export default GlyphButton;
