import styles from './Welcome.module.css'


function Welcome() { 
    return (
        <div className={styles.container}>
                <div className={styles.row1}>
                    <div className={styles.welcomeText}>Welcome, Alex</div>
                    <div className={styles.subtittle}>Available Points</div>
                    <div className={styles.pointsText}>1020</div>

                    
                </div>

                <div className={styles.divisor}/>


            <div className={styles.row2}> 
                
                <button 
                className={styles.button1} 
                >
                PLAY NOW!
                </button>

                <button 
                className={styles.button2}
            
                >
                REDEEM
                 </button>
                </div>
        </div>
    )
}

export default Welcome;