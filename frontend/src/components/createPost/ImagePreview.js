import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";

export default function ImagePreview({ text, setText, user, rows, images, setImages }) {

    const fileInputRef = useRef(null);

    const handleFormDivClick = () => {
        // Trigger a click event on the file input element
        fileInputRef.current.click();
    };

    const handleImages = (e) => {
        let files = Array.from(e.target.files);
        files.forEach((img) => {
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onloadend = (readerEvent) => {
                setImages((img) => [...img, readerEvent.target.result]);
            };
        });
        console.log(images);
    };

    const handleExit = () => {
        setImages([])
    }

    const handleDeleteImage = (index) => {
        // Filter out the image at the specified index and update the state
        setImages((prevImages) => {
            const newImages = [...prevImages];
            newImages.splice(index, 1);
            return newImages;
        });
    };

    return (
        <>
            <EmojiPicker text={text} setText={setText} user={user} rows={rows} />
            <div className="mt-2">
                {/* File Upload */}
                <form
                    action="/"
                    method="post"
                    className="dropzone"
                    id="myAwesomeDropzone"
                    data-plugin="dropzone"
                    data-previews-container="#file-previews"
                    data-upload-preview-template="#uploadPreviewTemplate"
                >
                    <div className="fallback">
                        <input name="file" type="file" multiple hidden ref={fileInputRef} onChange={handleImages} />
                    </div>

                    {images && images.length ? (
                        // If there are images, show the carousel
                        <>
                            <button type="button" className="close" onClick={handleExit}>
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="dz-message needsclick">
                                {/* close button on top right corner */}
                                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                                    <div className="carousel-inner">
                                        {/* Render carousel items based on the images */}
                                        {images.map((image, index) => (
                                            <div className={`carousel-item${index === 0 ? " active" : ""}`} key={index}>
                                                <div className="mb-2">
                                                    <button type="button" className="btn btn-sm btn-primary mr-1">Edit</button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-danger ml-1"
                                                        onClick={() => handleDeleteImage(index)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                                <img className="d-block img-fluid" src={image} alt={`Slide ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                    {/* If there are more than one image, show the carousel controls */}
                                    {images.length > 1 && (
                                        <>
                                            <a className="btn btn-sm btn-info text-center align-items-center mr-1" href="#carouselExampleFade" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon mt-1" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="btn btn-sm btn-info text-center align-items-center ml-1" href="#carouselExampleFade" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon mt-1" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        // If there are no images, show the "Drop files here or click to upload." message
                        <div className="dz-message needsclick" onClick={handleFormDivClick}>
                            <i className="h1 text-muted dripicons-cloud-upload" />
                            <h3>Drop files here or click to upload.</h3>
                        </div>
                    )}
                </form>
                {/* Preview */}
            </div>
        </>

    )
}
