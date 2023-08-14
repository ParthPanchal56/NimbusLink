import { useState } from "react"

export default function AddToYourPost({ show, setShow }) {

    const [addToPost, setAddToPost] = useState(true)

    const handleShow = () => {
        setShow(!show)
    }


    return (
        <>
            {addToPost && (
                <div className="col-lg-12 mt-3">
                    <div className="card p-2">
                        <button type="button" className="btn btn-success m-1" onClick={handleShow}>
                            <i className="mdi mdi-image-multiple" style={{ fontSize: "20px" }}></i>
                        </button>
                        <button type="button" className="btn btn-primary m-1">
                            <i className="mdi mdi-tag" style={{ fontSize: "20px" }}></i>
                        </button>
                        <button type="button" className="btn btn-danger m-1">
                            <i className="mdi mdi-map-marker-radius-outline" style={{ fontSize: "20px" }}></i>
                        </button>
                    </div>
                </div>
            )}
        </>

    )
}
