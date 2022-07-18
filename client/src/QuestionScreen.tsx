
import classNames from 'classnames'
import { useCallback, useState } from 'react'
import { questions } from './questions'
import styles from './QuestionScreen.module.css'
import sadGuy from './sad-guy.svg'
import happyGuy from './lil-guy1.svg'
import confetti from './confetti.svg'
import { useFilterByEntity, useFilterByIntent, useOnFinalSpeechSegment } from './speechlyUtils'



const answerChoicesStyles = [
  styles.answer1,
  styles.answer2,
  styles.answer3,
  styles.answer4,
]

const answerChoicesLabels = [
  'A',
  'B',
  'C',
  'D',
]

const answerChoicesLabelStyles = [
  styles.label1,
  styles.label2,
  styles.label3,
  styles.label4,
]


type State =
  | 'waiting'
  | 'correct'
  | 'incorrect'






const mapOptionToIdx = new Map([
  ['A', 0],
  ['B', 1],
  ['C', 2],
  ['D', 3],
])

const useOnAnswerSelected = (selectAnswer: (idx: number) => void) => {
  useOnFinalSpeechSegment(
    useFilterByIntent('answer',
    useFilterByEntity('option',
    useCallback(option => {
      const idx = mapOptionToIdx.get(option)
      if (idx !== undefined) {
        selectAnswer(idx)
      }
    }, [selectAnswer])))
  )
}



export const QuestionScreen = ({
  addPoints,
}: {
  addPoints: (_: number) => void,
}) => {
  const [counter, setCounter] = useState(0)
  
  const [index, setIndex] = useState(0)
  const question = questions[index]
  
  const [state, setState] = useState<State>('waiting')
  
  
  const selectAnswer = useCallback((idx: number) => {
    if (idx === question.correctAnswer) {
      setState('correct')
      addPoints(50)
    } else {
      setState('incorrect')
    }
    setTimeout(() => {
      // setIndex(Math.floor(Math.random() * questions.length))
      setIndex(index => (index + 1) % questions.length)
      setCounter(count => count + 1)
      setState('waiting')
    }, 5000)
  }, [addPoints, question])
  
  
  
  useOnAnswerSelected(selectAnswer)
  
  
  return <div className={styles.questionScreen}>
    <div className={styles.questionWrapper}>
      <span className={styles.counterWrapper}>
        <span className={styles.counter}>{counter + 1}</span>
      </span>
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
                selectAnswer(idx)
              }
            }}
          >
            <span className={answerChoicesLabelStyles[idx]}>
              {answerChoicesLabels[idx]}
            </span>
            {choice}
          </button>
        </li>
      )}
    </ol>
    
    { state !== 'waiting' && <Toast state={state} /> }
    
    <div className={
      state === 'waiting'
      ? styles.mascotWrapperWaiting
      : styles.mascotWrapperAnswered
    }>
      <img
        className={styles.mascot}
        src={state === 'incorrect' ? sadGuy : happyGuy}
        alt="mascot"
      />
      { state === 'correct' &&
        <img className={styles.confetti} src={confetti} alt="confetti" />
      }
    </div>
    
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


