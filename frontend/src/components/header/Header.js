import Cookies from 'js-cookie';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


function Header() {

    const { user } = useSelector((user) => ({ ...user }));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        Cookies.remove('user');
        navigate('/login');
    }


    return (
        <>
            {/* Topbar Start */}
            <div className="navbar-custom topnav-navbar topnav-navbar-dark">
                <div className="container-fluid">
                    {/* LOGO */}
                    <Link to="/" className="topnav-logo">
                        <span className="topnav-logo-lg">
                            <img src="assets/images/nimbuslink/NimbusLink-Logo-header.png" alt="" height={30} />
                        </span>
                        <span className="topnav-logo-sm">
                            <img src="assets/images/nimbuslink/NimbusLink-Logo-header.png" alt="" height={30} />
                        </span>
                    </Link>

                    <ul className="list-unstyled topbar-right-menu float-right mb-0">

                        {/* if user is not logged in show login button or else show the div */}

                        {!user ? (
                            <li className="dropdown notification-list mt-2 pt-1">
                                <Link
                                    className="nav-link mr-0"
                                    to="/login"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <button className='btn btn-primary btn-sm'>Login</button>
                                </Link>
                            </li>
                        ) : (
                            <>
                                <li className="dropdown notification-list d-lg-none">
                                    <Link
                                        className="nav-link dropdown-toggle arrow-none"
                                        data-toggle="dropdown"
                                        to="#"
                                        role="button"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                    >
                                        <i className="dripicons-search noti-icon" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                                        <form className="p-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search ..."
                                                aria-label="Recipient's username"
                                            />
                                        </form>
                                    </div>
                                </li>

                                <li className="notification-list">
                                    <a className="nav-link right-bar-toggle" href="javascript: void(0);">
                                        <i className="dripicons-gear noti-icon"></i>
                                    </a>
                                </li>
                                <li className="dropdown notification-list">
                                    <Link
                                        className="nav-link dropdown-toggle arrow-none"
                                        data-toggle="dropdown"
                                        to="#"
                                        id="topbar-notifydrop"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="dripicons-bell noti-icon" />
                                        <span className="noti-icon-badge" />
                                    </Link>
                                    <div
                                        className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg"
                                        aria-labelledby="topbar-notifydrop"
                                    >
                                        {/* item*/}
                                        <div className="dropdown-item noti-title">
                                            <h5 className="m-0">
                                                <span className="float-right">
                                                    <Link to="#" className="text-dark">
                                                        <small>Clear All</small>
                                                    </Link>
                                                </span>
                                                Notification
                                            </h5>
                                        </div>
                                        <div style={{ maxHeight: 230 }} data-simplebar="">
                                            {/* item*/}
                                            <Link
                                                to="#"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="notify-icon bg-primary">
                                                    <i className="mdi mdi-comment-account-outline" />
                                                </div>
                                                <p className="notify-details">
                                                    Caleb Flakelar commented on Admin
                                                    <small className="text-muted">1 min ago</small>
                                                </p>
                                            </Link>
                                            {/* item*/}
                                            <Link
                                                to="#"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="notify-icon bg-info">
                                                    <i className="mdi mdi-account-plus" />
                                                </div>
                                                <p className="notify-details">
                                                    New user registered.
                                                    <small className="text-muted">5 hours ago</small>
                                                </p>
                                            </Link>
                                            {/* item*/}
                                            <Link
                                                to="#"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="notify-icon">
                                                    <img
                                                        src="assets/images/users/avatar-2.jpg"
                                                        className="img-fluid rounded-circle"
                                                        alt=""
                                                    />{" "}
                                                </div>
                                                <p className="notify-details">Cristina Pride</p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>Hi, How are you? What about our next meeting</small>
                                                </p>
                                            </Link>
                                            {/* item*/}
                                            <Link
                                                to="#"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="notify-icon bg-primary">
                                                    <i className="mdi mdi-comment-account-outline" />
                                                </div>
                                                <p className="notify-details">
                                                    Caleb Flakelar commented on Admin
                                                    <small className="text-muted">4 days ago</small>
                                                </p>
                                            </Link>
                                        </div>
                                        {/* All*/}
                                        <Link
                                            to="#"
                                            className="dropdown-item text-center text-primary notify-item notify-all"
                                        >
                                            View All
                                        </Link>
                                    </div>
                                </li>

                                <li className="dropdown notification-list">
                                    <a
                                        className="nav-link dropdown-toggle nav-user arrow-none mr-0"
                                        data-toggle="dropdown"
                                        id="topbar-userdrop"
                                        href="#"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="account-user-avatar">
                                            <img
                                                src={user.profile_picture}
                                                alt="user-image"
                                                className="rounded-circle"
                                            />
                                        </span>
                                        <span>
                                            <span className="account-user-name">{user.first_name}{" "}{user.last_name}</span>
                                            <span className="account-position">{user.username}</span>
                                        </span>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown"
                                        aria-labelledby="topbar-userdrop"
                                    >
                                        {/* item*/}
                                        <div className=" dropdown-header noti-title">
                                            <h6 className="text-overflow m-0">Welcome !</h6>
                                        </div>
                                        {/* item*/}
                                        <Link to="/profile" className="dropdown-item notify-item">
                                            <i className="mdi mdi-account-circle mr-1" />
                                            <span>My Account</span>
                                        </Link>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-account-edit mr-1" />
                                            <span>Settings</span>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-lifebuoy mr-1" />
                                            <span>Support</span>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-lock-outline mr-1" />
                                            <span>Lock Screen</span>
                                        </a>
                                        {/* item*/}
                                        <Link to="javascript:void(0);" className="dropdown-item notify-item" onClick={handleLogout}>
                                            <i className="mdi mdi-logout mr-1" />
                                            <span>Logout</span>
                                        </Link>
                                    </div>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* if user is not logged in hide the search bar */}

                    {user && (
                        <div className="app-search dropdown">
                            <form>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search..."
                                        id="top-search"
                                        onFocus={() => {
                                            document.getElementById("search-dropdown").classList.add("show");
                                        }}
                                        onBlur={() => {
                                            document.getElementById("search-dropdown").classList.remove("show");
                                        }}
                                    />
                                    <span className="mdi mdi-magnify search-icon" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                                {/* Search dropdown content */}
                                <div className="dropdown-header noti-title">
                                    <h5 className="text-overflow mb-2">
                                        Found <span className="text-danger">17</span> results
                                    </h5>
                                </div>
                                {/* Search dropdown items */}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="uil-notes font-16 mr-1" />
                                    <span>Analytics Report</span>
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="uil-life-ring font-16 mr-1" />
                                    <span>How can I help you?</span>
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="uil-cog font-16 mr-1" />
                                    <span>User profile settings</span>
                                </a>
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                                </div>
                                {/* Additional search dropdown items */}
                            </div>
                        </div>
                    )}

                </div >
            </div >
            {/* end Topbar */}

            {user && (
                <>
                    {/* Right Sidebar */}
                    <div className="right-bar">
                        <div className="rightbar-title">
                            <a href="javascript:void(0);" className="right-bar-toggle float-right">
                                <i className="dripicons-cross noti-icon" />
                            </a>
                            <h5 className="m-0">Settings</h5>
                        </div>
                        <div className="rightbar-content h-100" data-simplebar="">
                            <div className="p-3">
                                {/* Settings */}
                                <h5 className="mt-3">Friends</h5>
                                <hr className="mt-1" />
                                {/* Left Sidebar*/}
                                <Link className="btn btn-primary btn-block btn-lg" type="submit">
                                    <i className="uil uil-users-alt  mr-1" /> Find Friends
                                </Link>
                            </div>{" "}
                            {/* end padding*/}
                        </div>
                    </div>
                    <div className="rightbar-overlay" />
                    {/* /Right-bar */}

                </>
            )}
        </>



    )
}

export default Header