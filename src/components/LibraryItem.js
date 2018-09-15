import React, { Component } from 'react';
import { Text, TouchableHighlight, View, } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class LibraryItem extends Component {

  render() {
    return (
      <View style={styles.libraryItemView}>
        <TouchableHighlight 
          style={styles.libraryTitleView}
          onPress={() => { this.props.selectLibrary(this.props.library.id); }}
          underlayColor={'#595959'}
        >
          <Text style={styles.titleText}>
            {this.props.library.title}
          </Text>
        </TouchableHighlight>
        {
          (this.props.shouldExpand) ?
          <View style={styles.libraryBodyView}>
            <Text>
              {this.props.library.description}
            </Text>
          </View> 
          :
          <View />
        }
      </View>
    );
  }
}


const styles = {
  libraryItemView: {
    margin: 10,
  },
  libraryTitleView: {
    backgroundColor: 'grey',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
  },
  libraryBodyView: {
    padding: 10,
  }
};

function mapStateToProps(state, ownProps) {
  const shouldExpand = (state.selectedLibrary === ownProps.library.id);
  return { shouldExpand };
}

export default connect(mapStateToProps, actions)(LibraryItem);
