/// <reference path="./index.d.tsx" />
import React from 'react';
import { PlaylistsView } from './playlists/containers/PlaylistsView';

// npm i bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import { MusicSearchView } from './music-search/containers/MusicSearchView';
import { PlaylistsTDD } from './playlists/containers/PlaylistsTDD';

// npm i --save-dev @types/react-router
import { Redirect, Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* .container>.row>.col */}
      <div className="container">
        <div className="row">
          <div className="col">

            <h1>MusicApp</h1>

            <Switch>
              <Redirect path="/" exact={true} to="/playlists" />
              <Route path="/playlists" component={PlaylistsView} />
              <Route path="/search" component={MusicSearchView} />
              <Route path="*" render={() => <h1>Page Not Found</h1>} />
            </Switch>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
