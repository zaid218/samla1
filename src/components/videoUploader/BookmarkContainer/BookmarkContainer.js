// src/components/videoUploader/BookmarkContainer/BookmarkContainer.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark, selectBookmarkedVideos } from '../../../redux/videoslice';

const BookmarkContainer = () => {
    const dispatch = useDispatch();
    const bookmarkedVideos = useSelector(selectBookmarkedVideos);
    const [showBookmarked, setShowBookmarked] = useState(false);

    const toggleBookmarkHandler = (video) => {
        dispatch(toggleBookmark(video));
    };

    const toggleShowBookmarkedHandler = () => {
        setShowBookmarked((prev) => !prev);
    };

    return (
        <div style={{ textAlign: 'left' }}>
            <h2 style={{ margin: '10px 0' }}>Bookmarked Videos</h2>
            <button
                onClick={toggleShowBookmarkedHandler}
                style={{
                    background: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px',
                    margin: '10px 0', // Margin below the button
                    cursor: 'pointer',
                }}
            >
                {showBookmarked ? 'Hide Bookmarked Videos' : 'Show Bookmarked Videos'}
            </button>
            {showBookmarked && (
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start', // Left-aligned
                    }}
                >
                    {bookmarkedVideos.map((video) => (
                        <div key={video.id} style={{ margin: '10px', display: 'flex', flexDirection: 'column' }}>
                            <video controls width="300" style={{ marginBottom: '5px' }}>
                                <source src={video.url} type="video/mp4" />
                            </video>
                            <button
                                onClick={() => toggleBookmarkHandler(video)}
                                style={{
                                    background: '#3498db',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    padding: '10px',
                                    cursor: 'pointer',
                                    marginTop: '5px', // Adjusted margin for button below the video
                                }}
                            >
                                {video.bookmarked ? 'Unbookmark' : 'Bookmark'}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookmarkContainer;
