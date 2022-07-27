import React from 'react';
import Wrapper from '~/utils/wrapper/Wrapper';
import Navigators from '~/navigators';
import { SafeAreaView } from '~/react-native';

const App = () => (
  <Wrapper>
    <SafeAreaView className="h-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <Navigators />
    </SafeAreaView>
  </Wrapper>
);

export default App;
