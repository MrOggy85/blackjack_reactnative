import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from "react-navigation";
import configureStore from './configureStore';
import AppNavigator from './src/containers/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <AppContainer />
      </Provider>
    );
  }
}
