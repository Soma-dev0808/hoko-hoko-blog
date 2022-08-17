import React from 'react';
import Proptypes from 'prop-types';
import BlogListItem from './BlogListItem';

import './BlogList.scss';

const BlogList = ({ blogList }) => {
    if (!Array.isArray(blogList) || !blogList.length) return null;
    return (
        <div className="BlogList-item-list">
            {blogList.map((blog) => (
                <BlogListItem key={blog.id} {...blog} />
            ))}
        </div>
    );
};

BlogList.propTypes = {
    blogList: Proptypes.array.isRequired,
};

BlogList.defaultProps = {
};

export default BlogList;
