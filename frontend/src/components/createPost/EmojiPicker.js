import React from 'react'
import { useState, useEffect } from 'react'
import Picker from 'emoji-picker-react';
import { useRef } from 'react';

export default function EmojiPicker({ text, setText, user, rows }) {
    const [emojiPicker, setEmojiPicker] = useState(false)
    const [cursorPosition, setCursorPosition] = useState()

    const textRef = useRef(null);

    useEffect(() => {
        textRef.current.selectionEnd = cursorPosition
    }, [cursorPosition])


    const handleEmojiClick = (emojiData, event) => {
        const ref = textRef.current;
        ref.focus();
        const start = text.substring(0, ref.selectionStart);
        const end = text.substring(ref.selectionStart);
        const emoji = emojiData.emoji; // Access the emoji character string from the emojiData object
        const newText = `${start}${emoji}${end}`;
        setText(newText);
        setCursorPosition(start.length + emoji.length)
    };
    return (
        <>
            <div>
                <div className="media-body">
                    <textarea ref={textRef} rows={rows} className="form-control border-0 mb-1" placeholder={`What is in your mind, ${user.first_name}?`} defaultValue={""} maxLength={500} value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={{ resize: "none", fontSize: "25px", background: "url()" }}
                    />
                    <hr />
                </div>
                <div className="media-body">
                    <div className="tab-pane show active text-right mb-1" id="icon-buttons-preview">
                        <div className="button-list">
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() => setEmojiPicker(!emojiPicker)}

                            >
                                <i className="uil-grin" style={{ fontSize: "18px" }}></i>
                            </button>
                        </div>
                    </div>
                    {emojiPicker && (
                        <div className="card" style={{ width: '100%', maxWidth: 'auto', marginTop: '10px' }}>
                            {/* Set the width and maxWidth as per your preference */}
                            <Picker
                                width={'100%'}
                                searchDisabled={true}
                                emojiStyle='facebook'
                                defaultSkinTone='3'
                                onEmojiClick={handleEmojiClick}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
