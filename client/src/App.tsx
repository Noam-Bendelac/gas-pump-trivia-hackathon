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
  
  const startingPoints = 6450
  
  const { points: sessionPoints, addPoints } = usePoints()
  
  const totalPoints = startingPoints + sessionPoints
  
  
  const [screen, setScreen] = useState<Screen>('welcome')
  
  
  return (
    <div className={styles.app}>
      { screen === 'welcome'
      ? <Welcome setScreen={setScreen} points={totalPoints} />
      : <>
          <Header
            phoneNumber={null}
            points={sessionPoints}
            showNavToRewards={screen === 'questions'}
            setScreen={setScreen}
          />
          <main className={styles.main}>
            { screen === 'questions'
            ? <QuestionScreen addPoints={addPoints} />
            : <Rewards sessionPoints={sessionPoints} totalPoints={totalPoints} />
            }
          </main>
        </>
      }
    </div>
  )
}

export default App
