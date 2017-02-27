import React            from 'react';
import ReactDOM         from 'react-dom';
import { Provider }     from 'react-redux';
import configureStore   from './store/configureStore';
import HomeContainer    from './modules/home/components/HomeContainer';
import './index.css';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <HomeContainer />
  </Provider>,
  document.getElementById('root')
);
