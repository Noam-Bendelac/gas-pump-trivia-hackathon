import { Dispatch } from 'react'
import { Screen } from './Screen'
import styles from './Welcome.module.css'


export const Welcome = ({
  setScreen,
  points,
}: {
  setScreen: Dispatch<Screen>,
  points: number,
}) => { 
  return (
    <div className={styles.container}>
        <div className={styles.row1}>
          <div className={styles.welcomeText}>Welcome, Alex</div>
          <div className={styles.subtittle}>Available Points</div>
          <div className={styles.pointsText}>{points}</div>

          
        </div>

        <div className={styles.divisor}/>


      <div className={styles.row2}> 
        
        <button 
        className={styles.button1}
        onClick={() => setScreen('questions')} 
        >
        PLAY NOW!
        </button>

        <button 
        className={styles.button2}
          onClick={() => setScreen('rewards')}
        >
        REDEEM
         </button>
        </div>
    </div>
  )
}
