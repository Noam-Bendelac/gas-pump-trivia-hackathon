// import classNames from 'classnames'
import styles from './Header.module.css'
import guy from './lil-guy1.svg'


export const Header = ({
  phoneNumber,
  points
}: {
  phoneNumber: string | null,
  points: number,
}) => {
  return <header className={styles.header}>
    <div className={styles.logo}>
      <img className={styles.logoSvg} src={guy} alt="lil-guy" />
    </div>
    <div className={styles.headerColumn2}>
    </div>
    <div className={styles.points}>
      {points} Points
    </div>
  </header>
}

