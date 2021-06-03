import React from 'react';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import {Greeter} from './Greeter';
import * as testIDs from '../../testIDs';

describe('Greeter', () => {
  it('should render a text view and edit field components', () => {
    const {getByTestId} = render(<Greeter/>);

    expect(getByTestId(testIDs.GREETER_TEXT)).toBeDefined();
    expect(getByTestId(testIDs.GREETER_NAME_FIELD)).toBeDefined();
  });

  it('should render a greeting', () => {
    const {getByTestId} = render(<Greeter/>);

    expect(getByTestId(testIDs.GREETER_TEXT)).toHaveTextContent('Hello');
  });
});
