import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools }  from 'redux-devtools-extension/developmentOnly';
import thunk                    from 'redux-thunk';
import reducers                 from './reducers';

const composer = composeWithDevTools || compose;
function configureStore(initialState) {

  const enhancer = composer(
    applyMiddleware(thunk)
  );

  return createStore(reducers, initialState, enhancer);
}

export default configureStore;
