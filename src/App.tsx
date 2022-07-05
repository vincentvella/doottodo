import React from 'react';
import Wrapper from '~/wrapper/Wrapper';
import { SafeAreaView } from 'react-native';
import Navigators from '~/navigators';

const App = () => {
  return (
    <Wrapper>
      <SafeAreaView>
        <Navigators />
      </SafeAreaView>
    </Wrapper>
  );
};

export default App;
