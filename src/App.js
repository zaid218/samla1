
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import VideoUploader from './components/videoUploader/VideoUploader';
import './App.css'; // Import the global CSS file


const App = () => {
  return (
    <Provider store={store}>
      <div className="App" style={{backgroundColor: '#000000'}}>
        <VideoUploader />
      </div>
    </Provider>
  );
};

export default App;