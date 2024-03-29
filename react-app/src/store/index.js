import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import answersReducer from './answers';
import postsReducer from './posts';
import questionsReducer from './questions';
import relatedReducer from './related';
import searchReducer from './search';
import session from './session'

const rootReducer = combineReducers({
  session,
  'questions': questionsReducer,
  'answers': answersReducer,
  'related': relatedReducer,
  'search': searchReducer,
  'posts': postsReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
