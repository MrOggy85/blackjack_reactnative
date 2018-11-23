import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import gameMiddleware from './src/utils/gameMiddleware';
import gameReducer from './src/screen/Play/reducer';

const rootReducer = combineReducers({
  game: gameReducer,
});

const middlewares = [gameMiddleware];

const enhancers = [
  applyMiddleware(...middlewares)
]

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );
}

export default configureStore;
