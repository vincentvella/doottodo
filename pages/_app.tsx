import 'cross-fetch/polyfill';
import 'raf/polyfill';
import 'setimmediate';

import { AppProps } from 'next/app';
import React from 'react';
import Wrapper from '../src/wrapper/Wrapper';

// @ts-expect-error
global.setImmediate = requestAnimationFrame;

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

export default App;
