// src/components/videoUploader/VideoUploader.js

import React from 'react';
import VideoList from './VideoList/VideoList';
import BookmarkContainer from './BookmarkContainer/BookmarkContainer';
import FilterContainer from './FilterContainer/FilterContainer';
import { useDispatch } from 'react-redux';
import { addVideo } from '../../redux/videoslice';

const VideoUploader = () => {
    const dispatch = useDispatch();

    const handleVideoUpload = async (event) => {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const videoData = await readFileAsync(file);
            dispatch(addVideo(videoData));
        }
    };

    const readFileAsync = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                const videoUrl = e.target.result;
                resolve({ id: generateUniqueId(), url: videoUrl, bookmarked: false });
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    const generateUniqueId = () => {
        return Math.random().toString(36).substring(7);
    };

    return (
        <div style={{ position: 'relative', padding: '20px', backgroundColor: '#000000' }} >
            <label
                htmlFor="upload-input"
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    padding: '10px',
                    background: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Upload
            </label>
            <input
                type="file"
                id="upload-input"
                onChange={handleVideoUpload}
                style={{ display: 'none' }}
                multiple
                accept="video/*"
            />
            <VideoList />
            <BookmarkContainer />
            <FilterContainer />
        </div>
    );
};

export default VideoUploader;
