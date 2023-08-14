import React from 'react';
import './story.css';

export default function Story({ story }) {


    // ****************************************************************************************************

    return (
        <div className="story-item" key={story.id}>
            <img
                src={story.imageUrl}
                alt={story.altText}
                className="img-fluid img-thumbnail rounded-circle"
                width="77"
            />
            <div className="story-text">
                <h6 className="mb-0">{story.altText}</h6>
            </div>
        </div>

    );
}
