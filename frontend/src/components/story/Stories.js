import React from 'react'
import './story.css'
import Story from './Story';
import { useRef, useState, useEffect } from 'react';

export default function Stories() {

    const containerRef = useRef(null);
    const [stories, setStories] = useState([]);

    // ####################################################################################################

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const storyData = [];
                for (let i = 1; i <= 20; i++) {
                    storyData.push({
                        id: i,
                        imageUrl: `https://source.unsplash.com/random/300x300?sig=${i}`,
                        altText: `Story ${i}`,
                    });
                }
                setStories(storyData);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    // ****************************************************************************************************

    // Mouse drag scroll

    useEffect(() => {
        const container = containerRef.current;
        let isMouseDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (event) => {
            isMouseDown = true;
            startX = event.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        };

        const handleMouseMove = (event) => {
            if (!isMouseDown) return;
            event.preventDefault();
            const x = event.pageX - container.offsetLeft;
            const walk = (x - startX) * 1; // Adjust scroll speed here
            container.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            isMouseDown = false;
        };

        container.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Mouse wheel scroll

    useEffect(() => {
        const container = containerRef.current;

        const handleWheelScroll = (event) => {
            event.preventDefault();
            container.scrollLeft += event.deltaY;
        };

        container.addEventListener('wheel', handleWheelScroll, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheelScroll);
        };
    }, []);

    // ####################################################################################################

    return (
        <div className="card">
            <div className="card-body p-3">
                <div className="story-container" ref={containerRef}>
                    {stories.map((story) => (
                        <Story story={story} />
                    ))}
                </div>
            </div>
        </div>
    )
}
