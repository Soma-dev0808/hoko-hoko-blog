import React from 'react';
import Proptypes from 'prop-types';

const BlogHeader = ({
    title, views, writer, status, date,
}) => (
    <>
        <h1>{title}</h1>
        <span>
            views:
            {views}
        </span>
        <p>
            writer:
            {writer}
        </p>
        <p>
            status:
            {status}
        </p>
        <p>
            date:
            {date}
        </p>
        <div>BlogHeader</div>
    </>
);

BlogHeader.propTypes = {
    title: Proptypes.string,
    views: Proptypes.number,
    writer: Proptypes.string,
    status: Proptypes.string,
    date: Proptypes.string,
};

BlogHeader.defaultProps = {
    title: '',
    views: 0,
    writer: '',
    status: '0',
    date: '',
};

export default BlogHeader;
