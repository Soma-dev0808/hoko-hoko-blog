import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

const rootReducer = combineReducers({
    loadingBar: loadingBarReducer,
});

export default rootReducer;
