/// <reference path="./index.d.tsx" />
import React from 'react';
import { PlaylistsView } from './playlists/containers/PlaylistsView';

// npm i bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import { MusicSearchView } from './music-search/containers/MusicSearchView';
import { PlaylistsTDD } from './playlists/containers/PlaylistsTDD';

// npm i --save-dev @types/react-router
import { Route } from 'react-router'

function App() {
  return (
    <div>
      {/* .container>.row>.col */}
      <div className="container">
        <div className="row">
          <div className="col">

            <h1>MusicApp</h1>
            <Route path=""></Route>
            {/* <PlaylistsTDD /> */}
            <PlaylistsView />
            <MusicSearchView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
