import React, { Component }     from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as userActions         from './../actions/index';

class HomeContainer extends Component {

  componentWillMount() {
    const { userActions } = this.props;
    userActions.fetchUser();
  }

  handleRender(){
    const { user } = this.props.userState;
    if (user === null) return <h1>Loading...</h1>;

    return <h1>{`${user.region}, ${user.city}`}</h1>
  }

  render() {
    return this.handleRender();
  }
}

export default connect(
  state => ({
    userState: state.user
  }),
  dispatch => ({
    userActions: bindActionCreators(userActions, dispatch)
  })
)(HomeContainer);
