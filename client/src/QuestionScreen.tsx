
import classNames from 'classnames'
import { useState } from 'react'
import { questions } from './questions'



import styles from './QuestionScreen.module.css'


const answerChoicesStyles = [
  styles.answer1,
  styles.answer2,
  styles.answer3,
  styles.answer4,
]


type State =
  | 'waiting'
  | 'correct'
  | 'incorrect'


export const QuestionScreen = ({
  addPoints,
}: {
  addPoints: (_: number) => void,
}) => {
  // const [counter, setCounter]
  
  const [index, setIndex] = useState(0)
  const question = questions[index]
  
  const [state, setState] = useState<State>('waiting')
  
  
  const queueNextQuestion = () => {
    setTimeout(() => {
      setIndex(Math.floor(Math.random() * questions.length))
      setState('waiting')
    }, 5000)
  }
  
  
  return <div className={styles.questionScreen}>
    <div className={styles.questionWrapper}>
      <h1 className={styles.question}>
        {question.question}
      </h1>
      <div className={styles.questionDecoration}></div>
    </div>
    
    <ol className={styles.answerChoices}>
      {question.answers.map((choice, idx) =>
        <li className={styles.answerChoice} key={idx}>
          <button
            className={answerChoicesStyles[idx]}
            onClick={() => {
              if (state === 'waiting') {
                if (idx === question.correctAnswer) {
                  setState('correct')
                  addPoints(50)
                } else {
                  setState('incorrect')
                }
                queueNextQuestion()
              }
            }}
          >
            {choice}
          </button>
        </li>
      )}
    </ol>
    
    { state !== 'waiting' && <Toast state={state} /> }
    
  </div>
}



const Toast = ({ state }: { state: State }) => {
  return <div className={classNames(
    styles.resultMessage,
    state === 'waiting'
    ? styles.waiting
    : state === 'correct'
    ? styles.correct
    : styles.incorrect
  )}>
    {
      state === 'correct'
      ? 'Correct!'
      : 'Incorrect :('
    }
    {/* <div className={classNames(
      styles.loadingBar,
      state === 'waiting'
      ? styles.waitingBar
      : state === 'correct'
      ? styles.correctBar
      : styles.incorrectBar
    )}></div> */}
  </div>
}


