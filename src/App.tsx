import React from 'react';
import Wrapper from './wrapper/Wrapper';
import Demo from './Demo';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <Wrapper>
      <SafeAreaView>
        <Demo />
      </SafeAreaView>
    </Wrapper>
  );
};

export default App;
