import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginComponent from './login';
import PostLoginComponent from './postlogin';
import WorldComponent from './world';

import * as loginActionCreators from '../../state/login/actions';

export class AppComponent
    extends Component
{
    static propTypes = {
        handlers: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }
    render() {
        console.log('App render called');
        if (this.props.login.user.loggedIn === false) {
            return <LoginComponent {...this.props}/>;
        }
        if (this.props.login.user.chosenCharacterIndex === null) {
            return <PostLoginComponent {...this.props}/>;
        }
        return <WorldComponent {...this.props}/>;
    }
}

export default connect(
    store => ({login: store.login}),
    dispatch => ({actions: bindActionCreators(loginActionCreators, dispatch)})
)(AppComponent);
