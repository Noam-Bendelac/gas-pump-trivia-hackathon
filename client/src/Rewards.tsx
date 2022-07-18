import styles from './Rewards.module.css';
import lilGuy from './lil-guy1.svg'



export const Rewards = ({
  sessionPoints,
  totalPoints,
}: {
  sessionPoints: number,
  totalPoints: number,
}) => {
  return <div className={styles.rewards}>
    <div className={styles.messages}>
      <div className={styles.title}> Thanks for playing! </div>
      <div className={styles.subtitle}> You're ranked <b>#24</b> in the area! </div>
    </div>

    <div className={styles.statsContainer}>

      <div className={styles.statistics}>
        <div className={styles.pointsTitle}> YOU'VE EARNED </div>
        <div className={styles.pointsNumber}>{sessionPoints}</div>
        <div className={styles.pointsText}>POINTS</div>
      </div>

      

      <div className={styles.statistics}>
        <div className={styles.pointsTitle}>YOU NOW HAVE </div>
        <div className={styles.pointsNumber}>{totalPoints}</div>
        <div className={styles.pointsText}>POINTS</div>
      </div>

    </div>
    
    <img className={styles.mascot} src={lilGuy} alt="mascot" />
    
  </div>
} 
