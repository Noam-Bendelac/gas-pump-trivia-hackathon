import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';


const Icon = ({ src }: { src: string }) => {
  
  
  // const logo = props.logo
  return <img src={src} />
}



const Counter = () => {
  // let index = 0
  const [index, setIndex] = useState(0)
  console.log(`rerendering with index: ${index}`)
  return <div>
    <p>{index}</p>
    <button onClick={() => { setIndex(index + 1) }}>+</button>
  </div>
}


function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          testing
        </a>
        {/* <Icon    src={logo}    /> */}
        <Counter />
        <Counter />
      </header>
    </div>
  );
}

export default App;
