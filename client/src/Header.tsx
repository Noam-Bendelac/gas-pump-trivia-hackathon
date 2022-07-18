// import classNames from 'classnames'
import { Dispatch } from 'react'
import styles from './Header.module.css'
import guy from './lil-guy1.svg'
import { Screen } from './Screen'


export const Header = ({
  phoneNumber,
  points,
  setScreen,
}: {
  phoneNumber: string | null,
  points: number,
  setScreen: Dispatch<Screen>,
}) => {
  return <header className={styles.header}>
    <div className={styles.logo} onClick={() => setScreen('welcome')}>
      <img className={styles.logoSvg} src={guy} alt="lil-guy" />
    </div>
    <div className={styles.headerColumn2}>
    </div>
    <div className={styles.points}>
      {points} Points
    </div>
  </header>
}

