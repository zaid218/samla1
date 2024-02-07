import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
    name: 'videos',
    initialState: {
        videoList: [],
        selectedVideo: null,
        filter: 'ALL', // Initial filter state
    },
    reducers: {
        addVideo: (state, action) => {
            state.videoList.push(action.payload);
        },
        updateVideo: (state, action) => {
            // Implement logic to update a video
        },
        deleteVideo: (state, action) => {
            state.videoList = state.videoList.filter((video) => video.id !== action.payload);
        },
        toggleBookmark: (state, action) => {
            const videoIndex = state.videoList.findIndex((v) => v.id === action.payload.id);
            if (videoIndex !== -1) {
                state.videoList[videoIndex].bookmarked = !state.videoList[videoIndex].bookmarked;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        selectVideo: (state, action) => {
            state.selectedVideo = action.payload;
        },
        closePlayer: (state) => {
            state.selectedVideo = null;
        },
    },
});

export const {
    addVideo,
    updateVideo,
    deleteVideo,
    toggleBookmark,
    setFilter,
    selectVideo,
    closePlayer,
} = videoSlice.actions;

export const selectVideoList = (state) => state.videos.videoList;
export const selectSelectedVideo = (state) => state.videos.selectedVideo;
export const selectFilter = (state) => state.videos.filter;

export const selectBookmarkedVideos = (state) => {
    return state.videos.videoList.filter((video) => video.bookmarked);
};

export default videoSlice.reducer;