import React from 'react';
import { Link } from 'react-router-dom';
import ActivateForm from '../components/activate/ActivateForm';
import ForgotPasswordForm from '../components/forgotPassword/ForgotPasswordForm';

export default function ForgotPassword() {
    return (
        <>
            <div className="auth-fluid">
                {/*Auth fluid left content */}
                <div className="auth-fluid-form-box">
                    <div className="align-items-center d-flex h-100">
                        <div className="card-body">
                            {/* Logo */}
                            {/* <div className="auth-brand text-center text-lg-left">
                            <a href="index.html" className="logo-dark">
                                <span>
                                    <img src="assets/images/logo-dark.png" alt="" height={18} />
                                </span>
                            </a>
                            <a href="index.html" className="logo-light">
                                <span>
                                    <img src="assets/images/logo.png" alt="" height={18} />
                                </span>
                            </a>
                        </div> */}
                            {/* title*/}
                            <h4 className="mt-0">Forgot Password</h4>
                            <p className="text-muted mb-4">
                                Enter your username for getting the OTP for reseting account password.
                            </p>

                            <ForgotPasswordForm />

                            {/* Footer*/}
                            <footer className="footer footer-alt">
                                <p className="text-muted">
                                    Already have account?{" "}
                                    <Link to="/login" className="text-muted ml-1">
                                        <b>Log In</b>
                                    </Link>
                                </p>
                            </footer>
                        </div>{" "}
                        {/* end .card-body */}
                    </div>{" "}
                    {/* end .align-items-center.d-flex.h-100*/}
                </div>
                {/* end auth-fluid-form-box*/}
                {/* Auth fluid right content */}
                <div className="auth-fluid-right text-center">
                    <div className="auth-user-testimonial">
                        <h2 className="mb-3">I love the color!</h2>
                        <p className="lead">
                            <i className="mdi mdi-format-quote-open" /> It's a elegent templete. I
                            love it very much! . <i className="mdi mdi-format-quote-close" />
                        </p>
                        <p>- Hyper Admin User</p>
                    </div>{" "}
                    {/* end auth-user-testimonial*/}
                </div>
                {/* end Auth fluid right content */}
            </div>



        </>
    );
}
