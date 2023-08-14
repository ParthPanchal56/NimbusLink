import { useState } from 'react';
import EmojiPicker from './EmojiPicker';
import AddToYourPost from './AddToYourPost';
import ImagePreview from './ImagePreview';
import { createPost } from '../../functions/post';
import { useNavigate } from 'react-router-dom';


export default function CreatePostPopup({ user }) {

    const [text, setText] = useState("")
    const [show, setShow] = useState(true)
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const handlePostSubmit = async () => {

        try {
            setLoading(true);
            const response = await createPost(null, user.id, text, null);

            if (response === "Post created successfully") {
                setLoading(false);
                setText("");
                setImages([]);
                console.log(response);
                window.location.reload();
                alert("Post created successfully");
            } else {
                setLoading(false);
                setError(response);
                console.log({ error });
            }

        } catch (error) {
            setLoading(false);
            console.error({ error });
        }
    }


    return (
        <>
            <div className="modal fade" id="centermodal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="media">
                                <img className="mr-2 rounded" src={user.profile_picture} alt=""
                                    height={32} />
                                <div className="media-body">
                                    <h5 className="m-0">{user.first_name} {user.last_name}</h5>
                                    <p className="text-muted">
                                        <small>
                                            ⚬ <span>Public</span>
                                        </small>
                                    </p>
                                </div>{" "}
                                {/* end media body*/}
                            </div>
                            {show ? (
                                <EmojiPicker
                                    text={text}
                                    setText={setText}
                                    user={user}
                                    rows={4}
                                />)
                                : <ImagePreview
                                    text={text}
                                    setText={setText}
                                    user={user}
                                    rows={1}
                                    images={images}
                                    setImages={setImages} />
                            }
                            <AddToYourPost show={show} setShow={setShow} />

                            {loading ? (
                                <button className="btn btn-primary btn-block" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                                    Loading...
                                </button>
                            ) : (
                                <button type="button" className="btn btn-block btn-primary" onClick={handlePostSubmit}>
                                    Add Post
                                </button>
                            )}

                            {error && <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                                <strong>{error}</strong>
                            </div>}

                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
        </>
    )
}