import React, { Component }     from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as userActions         from './../actions/index';
import App                      from './../../../components/App.js';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.handleRender = this.handleRender.bind(this);
  }

  componentDidMount() {
    const { userActions } = this.props;
    userActions.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
    const { userState, userActions } = nextProps;
    const { user } = this.state;
    const isGetWeather = user === null && userState.user !== null;
    
    if (isGetWeather) {
      this.setState({user: userState.user});
      userActions.fetchWeather(userState.user);
    }

  }

  handleRender() {
    const { weather, user } = this.props.userState;
    if (weather === null) return <h1>Loading...</h1>;
    const temp = weather.channel.item.condition.temp;

    return <App city={user.city} temp={temp}/>;
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
