import React, { useEffect } from 'react';
import './App.module.css';
import styles from './App.module.css';
import {Spotify} from '/Applications/Desktop/personal_projects/jamming/src/util/Spotify.js';

function App() {

  return (
    <div className={styles.App}>
      {/* Sign in with Spotify */}
      <div className={styles.welcomeInfo}>
        <h1>Ja<span>mmmm</span>ing</h1>
        <button onClick={Spotify}><i class='bx bxl-spotify'></i>LOGIN WITH SPOTIFY</button>
      </div>
    </div>
  );
}

export default App;