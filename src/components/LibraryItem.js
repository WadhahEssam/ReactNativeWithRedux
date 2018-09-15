import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class LibraryItem extends Component {
  render() {
    return (
      <TouchableHighlight 
        style={styles.libraryTitleView}
        onPress={() => { this.props.selectLibrary(this.props.library.id); }}
      >
        <Text style={styles.titleText}>
          {this.props.library.title}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = {
  libraryTitleView: {
    backgroundColor: 'grey',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 4,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
  }
};

export default connect(null, actions)(LibraryItem);
