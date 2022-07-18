import { Dispatch } from 'react'
import { Screen } from './Screen'
import styles from './Welcome.module.css'
import lilGuy from './lil-guy1.svg'


export const Welcome = ({
  setScreen,
  points,
}: {
  setScreen: Dispatch<Screen>,
  points: number,
}) => { 
  return (
    <div className={styles.welcome}>
      <div className={styles.top}>
        <div className={styles.welcomeText}>Welcome, Alex</div>
        <div className={styles.subtitle}>Available Points</div>
        <div className={styles.pointsText}>{points}</div>
        
        
      </div>
      
      <div className={styles.divisor}/>
      
      
      <div className={styles.buttons}> 
        
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
          REDEEM POINTS
        </button>
      </div>
      
      <img className={styles.mascot} src={lilGuy} alt="mascot" />
    </div>
  )
}
