import React, { Component } from 'react';
import { ListView, } from 'react-native';
import { connect } from 'react-redux';
import LibraryItem from './LibraryItem';

class LibraryList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(props.libraries),
    };
  }

  renderRow(item) {
    return <LibraryItem library={item} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

function mapStateToProps(state) {
  return { libraries: state.libraries };
}
 
export default connect(mapStateToProps)(LibraryList);
