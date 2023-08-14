import React from 'react'
import Header from '../components/header/Header'
import { useSelector } from 'react-redux';

export default function Profile() {

    const { user } = useSelector((state) => ({ ...state }));

    return (
        <>
            <Header />
            <div className="content-page">
                <div className="content mt-4">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="card text-center">
                                <div className="card-body">
                                    <img
                                        src={user.profile_picture}
                                        className="rounded-circle avatar-lg img-thumbnail"
                                        alt="profile-image"
                                    />
                                    <h4 className="mb-0 mt-2">{user.first_name} {user.last_name}</h4>
                                    <p className="text-muted font-14">{user.username}</p>
                                    <div className="text-left mt-3">
                                        <h4 className="font-13 text-uppercase">About Me :</h4>
                                        <p className="text-muted font-13 mb-3">
                                            {user.details.bio}
                                        </p>
                                        <p className="text-muted mb-2 font-13">
                                            <strong>Full Name :</strong>{" "}
                                            <span className="ml-2">{user.first_name} {user.last_name}</span>
                                        </p>
                                        <p className="text-muted mb-2 font-13">
                                            <strong>Email :</strong>{" "}
                                            <span className="ml-2 ">{user.email}</span>
                                        </p>
                                        <p className="text-muted mb-1 font-13">
                                            <strong>Lives in :</strong> <span className="ml-2">{user.details.lives_in}</span>
                                        </p>
                                    </div>
                                </div>{" "}
                                {/* end card-body */}
                            </div>{" "}
                            {/* end card */}
                            {/* Messages*/}
                            <div className="card">
                                <div className="card-body">
                                    <div className="dropdown float-right">
                                        <a
                                            href="#"
                                            className="dropdown-toggle arrow-none card-drop"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="mdi mdi-dots-vertical" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item">
                                                Settings
                                            </a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item">
                                                Action
                                            </a>
                                        </div>
                                    </div>
                                    <h4 className="header-title mb-3">Messages</h4>
                                    <div className="inbox-widget">
                                        <div className="inbox-item">
                                            <div className="inbox-item-img">
                                                <img
                                                    src="assets/images/users/avatar-2.jpg"
                                                    className="rounded-circle"
                                                    alt=""
                                                />
                                            </div>
                                            <p className="inbox-item-author">Tomaslau</p>
                                            <p className="inbox-item-text">
                                                I've finished it! See you so...
                                            </p>
                                            <p className="inbox-item-date">
                                                <a href="#" className="btn btn-sm btn-link text-info font-13">
                                                    {" "}
                                                    Reply{" "}
                                                </a>
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
                                            <p className="inbox-item-author">Stillnotdavid</p>
                                            <p className="inbox-item-text">This theme is awesome!</p>
                                            <p className="inbox-item-date">
                                                <a href="#" className="btn btn-sm btn-link text-info font-13">
                                                    {" "}
                                                    Reply{" "}
                                                </a>
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
                                            <p className="inbox-item-author">Kurafire</p>
                                            <p className="inbox-item-text">Nice to meet you</p>
                                            <p className="inbox-item-date">
                                                <a href="#" className="btn btn-sm btn-link text-info font-13">
                                                    {" "}
                                                    Reply{" "}
                                                </a>
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
                                            <p className="inbox-item-author">Shahedk</p>
                                            <p className="inbox-item-text">Hey! there I'm available...</p>
                                            <p className="inbox-item-date">
                                                <a href="#" className="btn btn-sm btn-link text-info font-13">
                                                    {" "}
                                                    Reply{" "}
                                                </a>
                                            </p>
                                        </div>
                                        <div className="inbox-item">
                                            <div className="inbox-item-img">
                                                <img
                                                    src="assets/images/users/avatar-6.jpg"
                                                    className="rounded-circle"
                                                    alt=""
                                                />
                                            </div>
                                            <p className="inbox-item-author">Adhamdannaway</p>
                                            <p className="inbox-item-text">This theme is awesome!</p>
                                            <p className="inbox-item-date">
                                                <a href="#" className="btn btn-sm btn-link text-info font-13">
                                                    {" "}
                                                    Reply{" "}
                                                </a>
                                            </p>
                                        </div>
                                    </div>{" "}
                                    {/* end inbox-widget */}
                                </div>{" "}
                                {/* end card-body*/}
                            </div>{" "}
                            {/* end card*/}
                        </div>{" "}
                        {/* end col*/}
                        <div className="col-xl-8 col-lg-7">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                        <li className="nav-item">
                                            <a
                                                href="#aboutme"
                                                data-toggle="tab"
                                                aria-expanded="false"
                                                className="nav-link rounded-0"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#timeline"
                                                data-toggle="tab"
                                                aria-expanded="true"
                                                className="nav-link rounded-0 active"
                                            >
                                                Timeline
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#settings"
                                                data-toggle="tab"
                                                aria-expanded="false"
                                                className="nav-link rounded-0"
                                            >
                                                Settings
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane" id="aboutme">
                                            <h5 className="text-uppercase">
                                                <i className="mdi mdi-briefcase mr-1" />
                                                Experience
                                            </h5>
                                            <div className="timeline-alt pb-0">
                                                <div className="timeline-item">
                                                    <i className="mdi mdi-circle bg-info-lighten text-info timeline-icon" />
                                                    <div className="timeline-item-info">
                                                        <h5 className="mt-0 mb-1">Lead designer / Developer</h5>
                                                        <p className="font-14">
                                                            websitename.com{" "}
                                                            <span className="ml-2 font-12">Year: 2015 - 18</span>
                                                        </p>
                                                        <p className="text-muted mt-2 mb-0 pb-3">
                                                            Everyone realizes why a new common language would be
                                                            desirable: one could refuse to pay expensive
                                                            translators. To achieve this, it would be necessary to
                                                            have uniform grammar, pronunciation and more common
                                                            words.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="timeline-item">
                                                    <i className="mdi mdi-circle bg-primary-lighten text-primary timeline-icon" />
                                                    <div className="timeline-item-info">
                                                        <h5 className="mt-0 mb-1">Senior Graphic Designer</h5>
                                                        <p className="font-14">
                                                            Software Inc.{" "}
                                                            <span className="ml-2 font-12">Year: 2012 - 15</span>
                                                        </p>
                                                        <p className="text-muted mt-2 mb-0 pb-3">
                                                            If several languages coalesce, the grammar of the
                                                            resulting language is more simple and regular than that
                                                            of the individual languages. The new common language
                                                            will be more simple and regular than the existing
                                                            European languages.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="timeline-item">
                                                    <i className="mdi mdi-circle bg-info-lighten text-info timeline-icon" />
                                                    <div className="timeline-item-info">
                                                        <h5 className="mt-0 mb-1">Graphic Designer</h5>
                                                        <p className="font-14">
                                                            Coderthemes Design LLP{" "}
                                                            <span className="ml-2 font-12">Year: 2010 - 12</span>
                                                        </p>
                                                        <p className="text-muted mt-2 mb-0 pb-2">
                                                            The European languages are members of the same family.
                                                            Their separate existence is a myth. For science music
                                                            sport etc, Europe uses the same vocabulary. The
                                                            languages only differ in their grammar their
                                                            pronunciation.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end timeline */}
                                            <h5 className="mb-3 mt-4 text-uppercase">
                                                <i className="mdi mdi-cards-variant mr-1" />
                                                Projects
                                            </h5>
                                            <div className="table-responsive">
                                                <table className="table table-borderless table-nowrap mb-0">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Clients</th>
                                                            <th>Project Name</th>
                                                            <th>Start Date</th>
                                                            <th>Due Date</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                                <img
                                                                    src="assets/images/users/avatar-2.jpg"
                                                                    alt="table-user"
                                                                    className="mr-2 rounded-circle"
                                                                    height={24}
                                                                />{" "}
                                                                Halette Boivin
                                                            </td>
                                                            <td>App design and development</td>
                                                            <td>01/01/2015</td>
                                                            <td>10/15/2018</td>
                                                            <td>
                                                                <span className="badge badge-info-lighten">
                                                                    Work in Progress
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                                <img
                                                                    src="assets/images/users/avatar-3.jpg"
                                                                    alt="table-user"
                                                                    className="mr-2 rounded-circle"
                                                                    height={24}
                                                                />{" "}
                                                                Durandana Jolicoeur
                                                            </td>
                                                            <td>Coffee detail page - Main Page</td>
                                                            <td>21/07/2016</td>
                                                            <td>12/05/2018</td>
                                                            <td>
                                                                <span className="badge badge-danger-lighten">
                                                                    Pending
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                                <img
                                                                    src="assets/images/users/avatar-4.jpg"
                                                                    alt="table-user"
                                                                    className="mr-2 rounded-circle"
                                                                    height={24}
                                                                />{" "}
                                                                Lucas Sabourin
                                                            </td>
                                                            <td>Poster illustation design</td>
                                                            <td>18/03/2018</td>
                                                            <td>28/09/2018</td>
                                                            <td>
                                                                <span className="badge badge-success-lighten">
                                                                    Done
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                                <img
                                                                    src="assets/images/users/avatar-6.jpg"
                                                                    alt="table-user"
                                                                    className="mr-2 rounded-circle"
                                                                    height={24}
                                                                />{" "}
                                                                Donatien Brunelle
                                                            </td>
                                                            <td>Drinking bottle graphics</td>
                                                            <td>02/10/2017</td>
                                                            <td>07/05/2018</td>
                                                            <td>
                                                                <span className="badge badge-info-lighten">
                                                                    Work in Progress
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>
                                                                <img
                                                                    src="assets/images/users/avatar-5.jpg"
                                                                    alt="table-user"
                                                                    className="mr-2 rounded-circle"
                                                                    height={24}
                                                                />{" "}
                                                                Karel Auberjo
                                                            </td>
                                                            <td>Landing page design - Home</td>
                                                            <td>17/01/2017</td>
                                                            <td>25/05/2021</td>
                                                            <td>
                                                                <span className="badge badge-warning-lighten">
                                                                    Coming soon
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>{" "}
                                        {/* end tab-pane */}
                                        {/* end about me section content */}
                                        <div className="tab-pane show active" id="timeline">
                                            {/* comment box */}
                                            <div className="border rounded mt-2 mb-3">
                                                <form action="#" className="comment-area-box">
                                                    <textarea
                                                        rows={3}
                                                        className="form-control border-0 resize-none"
                                                        placeholder="Write something...."
                                                        defaultValue={""}
                                                    />
                                                    <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="btn btn-sm px-2 font-16 btn-light"
                                                            >
                                                                <i className="mdi mdi-account-circle" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="btn btn-sm px-2 font-16 btn-light"
                                                            >
                                                                <i className="mdi mdi-map-marker" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="btn btn-sm px-2 font-16 btn-light"
                                                            >
                                                                <i className="mdi mdi-camera" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="btn btn-sm px-2 font-16 btn-light"
                                                            >
                                                                <i className="mdi mdi-emoticon-outline" />
                                                            </a>
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-sm btn-dark waves-effect"
                                                        >
                                                            Post
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>{" "}
                                            {/* end .border*/}
                                            {/* end comment box */}
                                            {/* Story Box*/}
                                            <div className="border border-light rounded p-2 mb-3">
                                                <div className="media">
                                                    <img
                                                        className="mr-2 rounded-circle"
                                                        src="assets/images/users/avatar-3.jpg"
                                                        alt="Generic placeholder image"
                                                        height={32}
                                                    />
                                                    <div className="media-body">
                                                        <h5 className="m-0">Jeremy Tomlinson</h5>
                                                        <p className="text-muted">
                                                            <small>about 2 minuts ago</small>
                                                        </p>
                                                    </div>
                                                </div>
                                                <p>
                                                    Story based around the idea of time lapse, animation to post
                                                    soon!
                                                </p>
                                                <img
                                                    src="assets/images/small/small-1.jpg"
                                                    alt="post-img"
                                                    className="rounded mr-1"
                                                    height={60}
                                                />
                                                <img
                                                    src="assets/images/small/small-2.jpg"
                                                    alt="post-img"
                                                    className="rounded mr-1"
                                                    height={60}
                                                />
                                                <img
                                                    src="assets/images/small/small-3.jpg"
                                                    alt="post-img"
                                                    className="rounded"
                                                    height={60}
                                                />
                                                <div className="mt-2">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="btn btn-sm btn-link text-muted"
                                                    >
                                                        <i className="mdi mdi-reply" /> Reply
                                                    </a>
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="btn btn-sm btn-link text-muted"
                                                    >
                                                        <i className="mdi mdi-heart-outline" /> Like
                                                    </a>
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="btn btn-sm btn-link text-muted"
                                                    >
                                                        <i className="mdi mdi-share-variant" /> Share
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Story Box*/}
                                            <div className="border border-light rounded p-2 mb-3">
                                                <div className="media">
                                                    <img
                                                        className="mr-2 rounded-circle"
                                                        src="assets/images/users/avatar-4.jpg"
                                                        alt="Generic placeholder image"
                                                        height={32}
                                                    />
                                                    <div className="media-body">
                                                        <h5 className="m-0">Thelma Fridley</h5>
                                                        <p className="text-muted">
                                                            <small>about 1 hour ago</small>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="font-16 text-center font-italic text-dark">
                                                    <i className="mdi mdi-format-quote-open font-20" /> Cras sit
                                                    amet nibh libero, in gravida nulla. Nulla vel metus
                                                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                                                    in vulputate at, tempus viverra turpis. Duis sagittis ipsum.
                                                    Praesent mauris. Fusce nec tellus sed augue semper porta.
                                                    Mauris massa.
                                                </div>
                                                <div className="mx-n2 p-2 mt-3 bg-light">
                                                    <div className="media">
                                                        <img
                                                            className="mr-2 rounded-circle"
                                                            src="assets/images/users/avatar-3.jpg"
                                                            alt="Generic placeholder image"
                                                            height={32}
                                                        />
                                                        <div className="media-body">
                                                            <h5 className="mt-0">
                                                                Jeremy Tomlinson{" "}
                                                                <small className="text-muted">3 hours ago</small>
                                                            </h5>
                                                            Nice work, makes me think of The Money Pit.
                                                            <br />
                                                            <a
                                                                href="javascript: void(0);"
                                                                className="text-muted font-13 d-inline-block mt-2"
                                                            >
                                                                <i className="mdi mdi-reply" /> Reply
                                                            </a>
                                                            <div className="media mt-3">
                                                                <a className="pr-2" href="#">
                                                                    <img
                                                                        src="assets/images/users/avatar-4.jpg"
                                                                        className="rounded-circle"
                                                                        alt="Generic placeholder image"
                                                                        height={32}
                                                                    />
                                                                </a>
                                                                <div className="media-body">
                                                                    <h5 className="mt-0">
                                                                        Thelma Fridley{" "}
                                                                        <small className="text-muted">5 hours ago</small>
                                                                    </h5>
                                                                    i'm in the middle of a timelapse animation myself!
                                                                    (Very different though.) Awesome stuff.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media mt-2">
                                                        <a className="pr-2" href="#">
                                                            <img
                                                                src="assets/images/users/avatar-1.jpg"
                                                                className="rounded-circle"
                                                                alt="Generic placeholder image"
                                                                height={32}
                                                            />
                                                        </a>
                                                        <div className="media-body">
                                                            <input
                                                                type="text"
                                                                id="simpleinput"
                                                                className="form-control border-0 form-control-sm"
                                                                placeholder="Add comment"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="btn btn-sm btn-link text-danger"
                                                    >
                                                        <i className="mdi mdi-heart" /> Like (28)
                                                    </a>
                                                    <a
                                                        href="javascript: void(0);"
                                                        className="btn btn-sm btn-link text-muted"
                                                    >
                                                        <i className="mdi mdi-share-variant" /> Share
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Story Box*/}
                                            <div className="border border-light p-2 mb-3">
                                                <div className="media">
                                                    <img
                                                        className="mr-2 rounded-circle"
                                                        src="assets/images/users/avatar-6.jpg"
                                                        alt="Generic placeholder image"
                                                        height={32}
                                                    />
                                                    <div className="media-body">
                                                        <h5 className="m-0">Martin Williamson</h5>
                                                        <p className="text-muted">
                                                            <small>15 hours ago</small>
                                                        </p>
                                                    </div>
                                                </div>
                                                <p>
                                                    The parallax is a little odd but O.o that house build is
                                                    awesome!!
                                                </p>
                                                <iframe
                                                    src="https://player.vimeo.com/video/87993762"
                                                    height={300}
                                                    className="img-fluid border-0"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0);" className="text-danger">
                                                    <i className="mdi mdi-spin mdi-loading mr-1" /> Load more{" "}
                                                </a>
                                            </div>
                                        </div>
                                        {/* end timeline content*/}
                                        <div className="tab-pane" id="settings">
                                            <form>
                                                <h5 className="mb-4 text-uppercase">
                                                    <i className="mdi mdi-account-circle mr-1" /> Personal Info
                                                </h5>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="firstname">First Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="firstname"
                                                                placeholder="Enter first name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="lastname">Last Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="lastname"
                                                                placeholder="Enter last name"
                                                            />
                                                        </div>
                                                    </div>{" "}
                                                    {/* end col */}
                                                </div>{" "}
                                                {/* end row */}
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="userbio">Bio</label>
                                                            <textarea
                                                                className="form-control"
                                                                id="userbio"
                                                                rows={4}
                                                                placeholder="Write something..."
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </div>{" "}
                                                    {/* end col */}
                                                </div>{" "}
                                                {/* end row */}
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="useremail">Email Address</label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="useremail"
                                                                placeholder="Enter email"
                                                            />
                                                            <span className="form-text text-muted">
                                                                <small>
                                                                    If you want to change email please{" "}
                                                                    <a href="javascript: void(0);">click</a> here.
                                                                </small>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="userpassword">Password</label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                id="userpassword"
                                                                placeholder="Enter password"
                                                            />
                                                            <span className="form-text text-muted">
                                                                <small>
                                                                    If you want to change password please{" "}
                                                                    <a href="javascript: void(0);">click</a> here.
                                                                </small>
                                                            </span>
                                                        </div>
                                                    </div>{" "}
                                                    {/* end col */}
                                                </div>{" "}
                                                {/* end row */}
                                                <h5 className="mb-3 text-uppercase bg-light p-2">
                                                    <i className="mdi mdi-office-building mr-1" /> Company Info
                                                </h5>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="companyname">Company Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="companyname"
                                                                placeholder="Enter company name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="cwebsite">Website</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="cwebsite"
                                                                placeholder="Enter website url"
                                                            />
                                                        </div>
                                                    </div>{" "}
                                                    {/* end col */}
                                                </div>{" "}
                                                {/* end row */}
                                                <h5 className="mb-3 text-uppercase bg-light p-2">
                                                    <i className="mdi mdi-earth mr-1" /> Social
                                                </h5>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="social-fb">Facebook</label>
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="mdi mdi-facebook" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="social-fb"
                                                                    placeholder="Url"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="social-tw">Twitter</label>
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="mdi mdi-twitter" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="social-tw"
                                                                    placeholder="Username"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>{" "}
                                                    {/* end col */}
                                                </div>{" "}
                                                {/* end row */}
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="social-insta">Instagram</label>
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="mdi mdi-instagram" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="social-insta"
                                                                    placeholder="Url"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="social-lin">Linkedin</label>
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="mdi mdi-linkedin" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="social-lin"
                                                                    placeholder="Url"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>{" "}
                                                    {/* end col */}
                                                </div>{" "}
                                                {/* end row */}
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="social-sky">Skype</label>
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="mdi mdi-skype" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="social-sky"
                                                                    placeholder="@username"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="social-gh">Github</label>
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="mdi mdi-github-circle" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="social-gh"
                                                                    placeholder="Username"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>{" "}
                                                    {/* end col */}
                                                </div>{" "}
                                                {/* end row */}
                                                <div className="text-right">
                                                    <button type="submit" className="btn btn-success mt-2">
                                                        <i className="mdi mdi-content-save" /> Save
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        {/* end settings content*/}
                                    </div>{" "}
                                    {/* end tab-content */}
                                </div>{" "}
                                {/* end card body */}
                            </div>{" "}
                            {/* end card */}
                        </div>{" "}
                        {/* end col */}
                    </div>
                    {/* end row*/}
                </div>{" "}
                {/* End Content */}
                {/* Footer Start */}
                {/* end Footer */}
            </div>

        </>

    )
}
