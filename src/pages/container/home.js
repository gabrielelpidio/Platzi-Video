import React, { Component } from "react";
import HomeLayout from "../component/home-layout";
import Categories from "../../categories/component/categories";
import Related from "../../related/components/related"
import ModalContainer from "../../widgets/container/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";
import { connect } from 'react-redux'
import { List as list } from "immutable";
import * as actions from "../../actions";
import { bindActionCreators } from "redux";



class Home extends Component {
  // state = {
  //   modalVisible: false
  // };

  handleCloseModal = event => {
    console.log(this.props.actions)
    this.props.actions.closeModal()
  };
  
  handleOpenModal = id => {
    console.log(this.props.actions)
    this.props.actions.openModal(id)
  };

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related 
            playlists={this.props.playlists}
            users={this.props.users.get('friends')}
            />
          <Categories
            search={this.props.search}
            user={this.props.users.get('user')}
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            isLoading={this.props.isLoading}
          />
          {this.props.modal.get('visibility') && (
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer
                  // src={this.state.media.src}
                  // title={this.state.media.title}
                  id={this.props.modal.get('mediaId')}
                  autoplay
                />
              </Modal>
            </ModalContainer>
          )}
        </HomeLayout>
      </HandleError>
    );
  }
}

function mapStateToProps(state, props) {
  const categories = state.getIn(['data', 'categories']).map((categoryId) => (
    state.getIn(['data', 'entities', 'categories', categoryId])
  ))
  let searchResults = list()
  const search = state.get('data').get('search');
  if (search) {
    const mediaList = state.get('data').get('entities').get('media');
    searchResults = mediaList.filter((item) => (
      item.get('author').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }
  return {
    categories: categories,
    playlists: state.getIn(['data', 'playlists', 'playlists']),
    users: state.getIn(['data', 'users']),
    search: searchResults,
    modal: state.get('modal'),
    isLoading: state.getIn(['isLoading', 'active'])
  }
  
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);
