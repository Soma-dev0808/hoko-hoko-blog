import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
    loadingBar: loadingBarReducer,
    blogReducer,
});

export default rootReducer;
