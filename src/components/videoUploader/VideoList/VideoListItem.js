// src/components/videoUploader/VideoList/VideoListItem.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleBookmark, deleteVideo } from '../../../redux/videoslice';

const VideoListItem = ({ video }) => {
    const dispatch = useDispatch();

    const toggleBookmarkHandler = () => {
        dispatch(toggleBookmark(video));
    };

    const deleteVideoHandler = () => {
        dispatch(deleteVideo(video.id));
    };

    return (
        <div className="video-item">
            <video controls width="300">
                <source src={video.url} type="video/mp4" />
            </video>
            <div className="video-buttons" style={{backgroundColor:'black'}}>
                <button
                    style={{
                        backgroundColor: '#3498db', // Blue color
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        margin: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={deleteVideoHandler}
                >
                    Delete
                </button>
                <button
                    style={{
                        backgroundColor: '#3498db', // Blue color
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        margin: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={toggleBookmarkHandler}
                >
                    {video.bookmarked ? 'Unbookmark' : 'Bookmark'}
                </button>
            </div>
        </div>
    );
};

export default VideoListItem;
