import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogListContainer from '../components/BlogList';
import SampleHeader from '../components/SampleHeader';

import { getBlogInfoAction, clearBlogInfoAction } from '../actions/blogActions';

const BlogList = ({
    blogInfo,
    getInfo,
    clearInfo,
}) => {
    const { isFetching, blogs } = blogInfo;

    useEffect(() => {
        getInfo();

        return () => clearInfo();
    }, []);

    return isFetching
        ? null : (
            <section>
                <SampleHeader />
                <BlogListContainer blogList={blogs} />
            </section>
        );
};

const mapStateProps = (state) => ({
    blogInfo: state.blogReducer,
});

const mapDispatchToProps = (dispatch) => ({
    getInfo: bindActionCreators(getBlogInfoAction, dispatch),
    clearInfo: bindActionCreators(clearBlogInfoAction, dispatch),
});

BlogList.propTypes = {
    blogInfo: Proptypes.object,
    getInfo: Proptypes.func.isRequired,
    clearInfo: Proptypes.func.isRequired,
};

BlogList.defaultProps = {
    blogInfo: {},
};

export default connect(mapStateProps, mapDispatchToProps)(BlogList);
