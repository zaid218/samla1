// src/components/videoUploader/VideoList/VideoList.js

import React from 'react';
import { useSelector } from 'react-redux';
import VideoListItem from './VideoListItem';
import { selectVideoList } from '../../../redux/videoslice';

const VideoList = () => {
    const videos = useSelector(selectVideoList);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <h2 style={{ fontSize: '40px', marginBottom: '20px', color: '#3498db' }}>Your Videos</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {videos.map((video) => (
                    <div key={video.id} style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5', padding: '0px', borderRadius: '5px' ,margin:'0px' }}>
                        <VideoListItem video={video} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoList;
// src/components/videoUploader/VideoList/VideoList.js
