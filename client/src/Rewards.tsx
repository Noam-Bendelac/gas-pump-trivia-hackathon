import styles from './Rewards.module.css';



export const Rewards = () => {
  return <div className={styles.rewards}>
    <div className={styles.messages}>
      <div className={styles.tittle}> Thanks for playing! </div>
      <div className={styles.subtittle}> You're ranked <b>#24</b> in the area! </div>
    </div>

    <div className={styles.container}>

      <div className={styles.statistics}>
        <div className={styles.pointsTittle}> YOU'VE EARNED </div>
        <div className={styles.pointsNumber}>50</div>
        <div className={styles.pointsText}>POINTS</div>
      </div>

      <div className={styles.logoSvg}></div>

      <div className={styles.statistics}>
        <div className={styles.pointsTittle}>YOU NOW HAVE </div>
        <div className={styles.pointsNumber}>1500</div>
        <div className={styles.pointsText}>POINTS</div>
      </div>

    </div>
  </div>
} 
