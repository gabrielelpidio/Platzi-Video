import React, { Component } from 'react';
import Header from '../components/header';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';


class HeaderContainer extends Component{
    state = {
        value: "Luis Fonsi"
    }
    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.input.value, 'submit');
        this.props.actions.searchAsyncEntities(this.input.value)
    }
    setInputRef = element => {
        this.input = element
    }

    handleInputChange = event =>{
        this.setState({
            value: event.target.value.replace(' ', '-')
        })
    }

    render() {
        return (
             <Header
             setRef={this.setInputRef}
             handleSubmit={this.handleSubmit}
             handleChange={this.handleInputChange}
             value={this.state.value}
             user={this.props.user}
             />
        );
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        actions: bindActionCreators( actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(HeaderContainer)