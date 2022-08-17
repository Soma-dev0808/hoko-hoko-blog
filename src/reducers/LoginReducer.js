import * as types from '../types/loginTypes';

const initialState = {
    email: '',
    password: '',
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_LOGIN_INFO:
            return { ...state, ...action.info };
        default:
            return state;
    }
}
