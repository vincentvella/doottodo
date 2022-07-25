import 'cross-fetch/polyfill';
import 'raf/polyfill';
import 'setimmediate';

import '../styles.css';

import { AppProps } from 'next/app';
import React from 'react';
import Wrapper from '~/utils/wrapper/Wrapper';

// @ts-expect-error
global.setImmediate = requestAnimationFrame;
// @ts-expect-error
global.__DEV__ = process.env.NODE_ENV === 'development';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
};

export default App;
