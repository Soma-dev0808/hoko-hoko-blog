import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import blogReducer from './blogReducer';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
    loadingBar: loadingBarReducer,
    blogReducer,
    loginReducer,
});

export default rootReducer;
