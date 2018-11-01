import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigator from './app/navigators';
import { store, persistor } from './app/redux/reducers';
import { Root } from 'native-base';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
