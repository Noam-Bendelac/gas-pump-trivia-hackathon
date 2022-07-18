import React, { useCallback, useState } from 'react';
import styles from './App.module.css';
import { Header } from './Header';
import { Screen } from './Screen'
import { QuestionScreen } from './QuestionScreen';
import { Rewards } from './Rewards';
import { Welcome } from './Welcome';




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




function App() {
  
  // const phoneNumber = usePhoneNumber()
  
  const { points, addPoints } = usePoints()
  
  
  const [screen, setScreen] = useState<Screen>('questions')
  
  
  return (
    <div className={styles.app}>
      <Header phoneNumber={null} points={points} setScreen={setScreen} />
      
      <main className={styles.main}>
        {
          screen === 'welcome'
          ? <Welcome />
          : screen === 'questions'
          ? <QuestionScreen addPoints={addPoints} />
          : <Rewards />
        }
        
      </main>
    </div>
  )
}

export default App
