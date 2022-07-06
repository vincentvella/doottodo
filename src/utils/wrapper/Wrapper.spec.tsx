import * as React from 'react';
import { render } from '@testing-library/react-native';

import App from './Wrapper';

test('renders correctly', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
