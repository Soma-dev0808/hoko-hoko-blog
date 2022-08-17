import * as types from '../types/loginTypes';

export const setLoginValue = (value, name) => (dispatch) => {
    dispatch({
        type: types.SET_LOGIN_INFO,
        info: { [name]: value },
    });
};

export const setLoginEmail2 = () => () => {

};
