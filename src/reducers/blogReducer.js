import * as types from '../types/blogTypes';

const defaultBlogs = {
    id: null,
    title: '',
    content: '',
    views: 0,
    writer: null,
    status: null,
    date: null,
};

const initialState = {
    blogs: [defaultBlogs],
    isFetching: false,
};

export default function blogReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_BLOG_CONTENTS:
            return { ...state, isFetching: true };
        case types.GET_BLOG_CONTENTS_SUCCESS:
            return {
                ...state,
                blogs: [...action.payload.data],
                isFetching: false,
            };
        case types.GET_BLOG_CONTENTS_FAILURE:
            return { ...state, isFetching: false };

        case types.CLEAR_BLOG_CONTENTS:
            return { ...initialState };
        default:
            return state;
    }
}
