
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ video, onClose }) => {
    // Implement component logic and UI here

    return (
        <div className="video-player">
            <ReactPlayer url={video.url} controls />
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default VideoPlayer;