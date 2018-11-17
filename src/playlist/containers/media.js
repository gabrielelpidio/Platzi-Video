import React, { Component } from 'react';
import { connect } from 'react-redux'
import Media from '../components/media';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';

class MediaContainer extends Component {
  
  openModal = (id) => {
    this.props.actions.openModal(id)
  }
  render() {
    return <Media 
      title={this.props.data.get('title')}
      author={this.props.data.get('author')}
      type={this.props.data.get('type')}
      cover={this.props.data.get('cover')}
      src={this.props.data.get('src')}
      id={this.props.data.get('id')}
      key={this.props.data.get('id')}
      openModal={this.openModal}
    />
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.getIn(['data', 'entities', 'media', props.id])
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
      actions: bindActionCreators( actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)