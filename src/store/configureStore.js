import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

export const initializeState = (preloadedState = initialState) => {
    const middleware = [];
};
