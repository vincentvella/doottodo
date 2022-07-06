import React from 'react';
import Wrapper from '~/wrapper/Wrapper';
import Navigators from '~/navigators';
import { SafeAreaView } from '~/react-native';

const App = () => (
  <Wrapper>
    <SafeAreaView className="h-full overflow-hidden bg-light dark:bg-dark">
      <Navigators />
    </SafeAreaView>
  </Wrapper>
);

export default App;
