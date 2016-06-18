// @flow
import { connect } from 'react-redux'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import {bindActionCreators} from 'redux';
import React, { Component } from 'react';

// Import screens
import AddScreen from '../components/addScreen.js';
import AllListsScreen from '../components/allListsScreen.js';

class RootContainer extends Component {

	constructor(props) {
    	super(props);
    }

    render() {
		// const { state, actions } = this.props;
		// console.log("Props", this.props, state, actions); // everything ok here

        return (
					<Router>
						<Scene key="root">
							<Scene key="addScreen" component={AddScreen} title="Add Screen" initial={true} tabs={true}>
							</Scene>
							<Scene key="allListsScreen" component={AllListsScreen} title="All your lists" tabs={true}>
              </Scene>
						</Scene>
					</Router>
        )
    }
}

export default connect()(RootContainer);

// export default connect(state => ({
//    state: state.counter
//  }),
//  (dispatch) => ({
//    actions: bindActionCreators(actions, dispatch)
//  })
// )(RootContainer);
