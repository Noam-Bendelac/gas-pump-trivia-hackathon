import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';





function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div className={styles.headerColumn1}>
          App Logo and Name
        </div>
        <div className={styles.headerColumn2}>
          User Identification
        </div>
        <div className={styles.headerColumn3}>
          Points
        </div>
      </div>
      
      <div className={styles.main}>
        <div className={styles.mainRow1}>
        
          <h1 className={styles.question}>Who was the 16th president of the United States?</h1>
          
          <ol className={styles.answerChoices}>
            {['A', 'B', 'C', 'D'].map(choice =>
              <li className={styles.answerChoice}>
                {choice}
              </li>
            )}
          </ol>
        </div>

        
        
        
      </div>
    </div>
    // <div className={styles.app}>
    //   <header className={styles.appHeader}>
    //     <img src={logo} className={styles.appLogo} alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className={styles.appLink}
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       testing
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
