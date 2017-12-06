import { createStore } from 'redux';
import rootReducer from './root-reducer';

const rootStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
);

export default rootStore;