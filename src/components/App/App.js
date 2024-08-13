import React from 'react';
import './App.module.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.welcomeInfo}>
        <h1>Ja<span>mmmm</span>ing</h1>
        <button><i class='bx bxl-spotify'></i>LOGIN WITH SPOTIFY</button>
      </div>
    </div>
  );
}

export default App;
