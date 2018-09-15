import React, { Component } from 'react';
import { View, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import Header from './components/common/Header';
import LibraryList from './components/LibraryList';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)} >
        <View>
          <Header label={'Libraries'} />
          <LibraryList style={{ flex: 1 }} />
        </View>
      </Provider>
    );
  }
}

export default App;
