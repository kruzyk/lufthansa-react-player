import React from 'react';
import './App.css';
import { PlaylistsView } from './playlists/containers/PlaylistsView';

function App() {
  return (
    <div>
      {/* .container>.row>.col */}
      <div className="container">
        <div className="row">
          <div className="col">

            <h1>MusicApp</h1>

            <PlaylistsView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
