import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { QuestionScreen } from './QuestionScreen';
import { Header } from './Header';
import welcome from './Welcome';




// const usePhoneNumber = () => {
//   const [phoneNumber, setPhoneNumber] = useState(() => {
//     const params = new URLSearchParams(window.location.search)
//     return params.get('phoneNumber') ?? '123-555-6789'
//   })
// }

const usePoints = () => {
  const [points, setPoints] = useState(0)
  const addPoints = useCallback(
    (addedPoints: number) => { setPoints(currPoints => currPoints + addedPoints) },
    [setPoints]
  )
  return { points, addPoints } as const
}



type Screen =
  | 'welcome'
  | 'questions'
  | 'results'


function App() {
  
  // const phoneNumber = usePhoneNumber()
  
  const { points, addPoints } = usePoints()
  
  
  const [screen, setScreen] = useState<Screen>('questions')
  
  
  return (
    <div className={styles.app}>
      <Header phoneNumber={null} points={points} />
      
      <main className={styles.main}>
        {
          screen === 'welcome'
          ? null
          : screen === 'questions'
          ? <QuestionScreen addPoints={addPoints} />
          : null
        }
        
      </main>
    </div>
  )
}

export default App
