import React, { useCallback, useState } from 'react';
import styles from './App.module.css';
import { Header } from './Header';
import { Screen } from './Screen'
import { QuestionScreen } from './QuestionScreen';
import { Rewards } from './Rewards';
import { Welcome } from './Welcome';
import { IntroPopup, PushToTalkButton } from '@speechly/react-ui';
import { useFilterByIntent, useOnFinalSpeechSegment } from './speechlyUtils';




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
  
  
  // const [audioInitialized, setAudioInitialized] = useState(false)
  
  
  useOnFinalSpeechSegment(
    useFilterByIntent('start',
    useCallback(() => {
      setScreen('questions')
    }, []))
  )
  useOnFinalSpeechSegment(
    useFilterByIntent('rewards',
    useCallback(() => {
      setScreen('rewards')
    }, []))
  )
  
  
  return (<>
    <div className={styles.speechOverlayWrapper}>
      <div className={styles.speechOverlay}>
        <PushToTalkButton />
        <IntroPopup />
      </div>
    </div>
    <div className={styles.app}>
      
      
      { screen !== 'welcome' && <Header
        phoneNumber={null}
        points={sessionPoints}
        showNavToRewards={screen === 'questions'}
        setScreen={setScreen}
      /> }
      
      <main className={styles.main}>
        { screen === 'welcome'
        ? <Welcome setScreen={setScreen} points={totalPoints} />
        : screen === 'questions'
        ? <QuestionScreen addPoints={addPoints} />
        : <Rewards sessionPoints={sessionPoints} totalPoints={totalPoints} />
        }
      </main>
    </div>
  </>)
}

export default App
