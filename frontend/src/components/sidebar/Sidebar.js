import React from 'react'
import { useSelector } from 'react-redux';

export default function Sidebar() {


    const { user } = useSelector((user) => ({ ...user }));

    return (

        <>
            <div div className="card" >
                <div className="card-body">
                    <div className="dropdown float-right">
                        <a
                            href="#"
                            className="dropdown-toggle arrow-none card-drop"
                            data-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="mdi mdi-dots-horizontal" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                Edit Profile
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                Settings
                            </a>
                        </div>
                    </div>
                    <div className="media">
                        <img
                            className="d-flex align-self-start rounded mr-2"
                            src={user.profile_picture}
                            alt={user._id}
                            height={48}
                        />
                        <div className="media-body">
                            <h5 className="mt-1 mb-0">{user.first_name} {user.last_name}</h5>
                            <p className="mb-1 mt-1 text-muted">Ontario, Canada</p>
                        </div>
                    </div>
                    <div className="list-group list-group-flush mt-2">
                        <a
                            href="javascript:void(0);"
                            className="list-group-item list-group-item-action text-primary border-0"
                        >
                            <i className="uil uil-images mr-1" /> News Feed
                        </a>
                        <a
                            href="javascript:void(0);"
                            className="list-group-item list-group-item-action border-0"
                        >
                            <i className="uil uil-comment-alt-message mr-1" /> Messages
                        </a>
                        <a
                            href="javascript:void(0);"
                            className="list-group-item list-group-item-action border-0"
                        >
                            <i className="uil uil-calendar-alt mr-1" /> Events
                        </a>
                        <a
                            href="javascript:void(0);"
                            className="list-group-item list-group-item-action border-0"
                        >
                            <i className="uil uil-users-alt mr-1" /> Find Friends
                        </a>
                        <a
                            href="javascript:void(0);"
                            className="list-group-item list-group-item-action border-0"
                        >
                            <i className="uil uil-file-bookmark-alt mr-1" /> Saved
                        </a>

                        <a
                            href="javascript:void(0);"
                            className="list-group-item list-group-item-action border-0"
                        >
                            <i className="uil uil-copy mr-1" /> Pages
                        </a>
                    </div>
                </div>
            </div >
            {/* end profile info */}

            <div div className="card" >
                <div className="card-body pb-0">
                    <div className="dropdown float-right">
                        <a
                            href="#"
                            className="dropdown-toggle arrow-none card-drop"
                            data-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="mdi mdi-dots-horizontal" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item">
                                View All
                            </a>
                        </div>
                    </div>
                    <h4 className="header-title mb-3">People you may know</h4>
                    <div className="inbox-widget">
                        <div className="inbox-item">
                            <div className="inbox-item-img">
                                <img
                                    src="assets/images/users/avatar-2.jpg"
                                    className="rounded-circle"
                                    alt=""
                                />
                            </div>
                            <p className="inbox-item-author">Robb Stark</p>
                            <p className="inbox-item-text">The first king in the North</p>
                            <p className="inbox-item-date">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-primary px-1 py-0"
                                >
                                    {" "}
                                    <i className="uil uil-user-plus font-16" />{" "}
                                </button>
                            </p>
                        </div>
                        <div className="inbox-item">
                            <div className="inbox-item-img">
                                <img
                                    src="assets/images/users/avatar-3.jpg"
                                    className="rounded-circle"
                                    alt=""
                                />
                            </div>
                            <p className="inbox-item-author">Stillnot David </p>
                            <p className="inbox-item-text">Lady of winterfall</p>
                            <p className="inbox-item-date">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-primary px-1 py-0"
                                >
                                    {" "}
                                    <i className="uil uil-user-plus font-16" />{" "}
                                </button>
                            </p>
                        </div>
                        <div className="inbox-item">
                            <div className="inbox-item-img">
                                <img
                                    src="assets/images/users/avatar-4.jpg"
                                    className="rounded-circle"
                                    alt=""
                                />
                            </div>
                            <p className="inbox-item-author">Cersei Lannister</p>
                            <p className="inbox-item-text">Queen of the Seven Kingdoms</p>
                            <p className="inbox-item-date">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-primary px-1 py-0"
                                >
                                    {" "}
                                    <i className="uil uil-user-plus font-16" />{" "}
                                </button>
                            </p>
                        </div>
                        <div className="inbox-item">
                            <div className="inbox-item-img">
                                <img
                                    src="assets/images/users/avatar-5.jpg"
                                    className="rounded-circle"
                                    alt=""
                                />
                            </div>
                            <p className="inbox-item-author">Daenerys Targaryen</p>
                            <p className="inbox-item-text">Hey! there I'm available...</p>
                            <p className="inbox-item-date">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-primary px-1 py-0"
                                >
                                    {" "}
                                    <i className="uil uil-user-plus font-16" />{" "}
                                </button>
                            </p>
                        </div>

                    </div>{" "}
                    {/* end inbox-widget */}
                    <div className="mt-2 mb-3 text-center">
                        <a href="#">
                            View More
                            <i className="uil uil-arrow-right ml-1" />
                        </a>
                    </div>
                </div>{" "}
                {/* end card-body */}
            </div >
        </>





    )
}
