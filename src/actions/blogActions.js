import * as types from '../types/blogTypes';
import webApiUtil from '../api/blogs';

const clearBlogInfo = () => ({
    type: types.CLEAR_BLOG_CONTENTS,
});

export const getBlogInfoAction = () => (dispatch) => {
    dispatch(webApiUtil.getBlogList(types.GET_BLOG_CONTENTS));
};

export const clearBlogInfoAction = () => (dispatch) => {
    dispatch(clearBlogInfo());
};
