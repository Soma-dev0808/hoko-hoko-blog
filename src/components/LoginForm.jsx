import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoginValue } from '../actions/loginActions';

import './LoginForm.scss';

const LoginForm = ({ loginInfo, setValue }) => (
    <section className="login-section">
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            {console.log(loginInfo)}
            <div className="login-input-container">
                {/* Email */}
                <input
                    type="email"
                    id="input-email"
                    name="email"
                    placeholder="Email"
                    className="login-input"
                    onChange={(e) => setValue(e.target.value, e.target.name)}
                />
                {/* Password */}
                <input
                    type="password"
                    id="input-password"
                    name="password"
                    placeholder="Password"
                    className="login-input"
                    onChange={(e) => setValue(e.target.value, e.target.name)}
                />
            </div>

            {/* Submit button */}
            <button type="submit" className="login-submit-button">
                Login
            </button>
        </div>
    </section>
);

const mapStateProps = (state) => ({
    loginInfo: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
    setValue: bindActionCreators(setLoginValue, dispatch),
});

LoginForm.propTypes = {
    setValue: Proptypes.func.isRequired,
    loginInfo: Proptypes.object.isRequired,
};

LoginForm.defaultProps = {};

export default connect(mapStateProps, mapDispatchToProps)(LoginForm);
