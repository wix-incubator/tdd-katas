import React from 'react';
import { Text, TextField } from 'react-native-ui-lib';
import * as testIDs from '../../testIDs';

export class Greeter extends React.Component {
  render() {
    return (
      <>
        <Text testID={testIDs.GREETER_TEXT}>{'Hello'}</Text>
        <TextField testID={testIDs.GREETER_NAME_FIELD} />
      </>
    );
  }
}
