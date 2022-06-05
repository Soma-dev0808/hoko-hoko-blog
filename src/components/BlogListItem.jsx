import React from 'react';
import PropTypes from 'prop-types';

import './BlogListItem.scss';

const BlogListItem = ({
    title, content, views, writer, status, date,
}) => (
    <div className="BlogListItem-item-container">
        {title}
        {content}
        {views}
        {writer}
        {status}
        {date}
    </div>
);

BlogListItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    views: PropTypes.number,
    writer: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
};

BlogListItem.defaultProps = {
    title: '',
    content: '',
    views: 0,
    writer: '',
    status: '0',
    date: '',
};

export default BlogListItem;
