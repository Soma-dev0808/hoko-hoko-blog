import React, { useLayoutEffect, useState } from 'react';
import {
    Router,
} from 'react-router-dom';
import Proptypes from 'prop-types';

const CustomRouter = ({ history, ...props }) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location,
    });

    useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            {...props}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
};

CustomRouter.propTypes = {
    history: Proptypes.object.isRequired,
};

export default CustomRouter;
