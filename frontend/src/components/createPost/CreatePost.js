import React from 'react'

export default function CreatePost() {
    return (
        <>
            <div className="card-body p-0">
                {/* end nav*/}
                <div className="tab-content">
                    <div className="tab-pane show p-3 active" id="newpost">
                        {/* comment box */}
                        <div className="border rounded">
                            <div className="comment-area-box">
                                <textarea
                                    rows={2}
                                    className="form-control border-0"
                                    placeholder="What is in your mind?"
                                    defaultValue={""}
                                    data-toggle="modal"
                                    data-target="#centermodal"
                                />
                                <div className="p-2 bg-light d-flex justify-content-center align-items-center">
                                    <div>
                                        <a href="#" className="btn btn-sm px-2 font-16 btn-light">
                                            <i className="uil uil-scenery" />
                                        </a>
                                        <a href="#" className="btn btn-sm px-2 font-16 btn-light">
                                            <i className="uil uil-location" />
                                        </a>
                                        <a href="#" className="btn btn-sm px-2 font-16 btn-light">
                                            <i className="uil uil-paperclip" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* end .border*/}
                        {/* end comment box */}
                    </div>{" "}
                    {/* end preview*/}
                </div>{" "}
                {/* end tab-content*/}
            </div>
        </>

    )
}
