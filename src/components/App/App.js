import React, { useState, useEffect } from 'react';
import './App.module.css';
import styles from './App.module.css'

import { Spotify } from '../../util/Spotify';
import wavingHand from './waving-hand@2x.gif';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = Spotify.checkAuth();
    if (token){
      setIsLoggedIn(true);
      // get user's 
      Spotify.getUserName()
        .then((fetchName) => {
          setUserName(fetchName);
        })
        .catch((error) => {
          console.error('Error fetching user name:', error);
        });
    }
  }, []);

  const handleLoginButtonClick = () => {
    Spotify.getAuth();
  }

  if (!isLoggedIn){
    return (
      <div className={styles.App}>
        {/* Sign in with Spotify */}
        <div className={styles.welcomeInfo}>
          <h1>Ja<span>mmmm</span>ing</h1>
          <button onClick={handleLoginButtonClick}><i class='bx bxl-spotify'></i>LOGIN WITH SPOTIFY</button>
        </div>
      </div>
    )
  } else{
    return (
      <div className={styles.App}>
        <div className={styles.home}>
          <h1>Hey there, {userName} <img src={wavingHand} alt="waving hand"/></h1>
          <p>Ready to make your next playlist?</p>
        </div>
      </div>
    )
  }
}

export default App;