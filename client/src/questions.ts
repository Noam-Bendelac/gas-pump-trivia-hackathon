
interface Question {
  question: string,
  answers: string[],
  correctAnswer: number,
}

export const questions: Question[] = [
  {
    question: "According to Greek mythology, who was the first woman on earth?",
    answers: ["Pandora", "Eve", "Athena", "Mary"],
    correctAnswer: 0
  },
  
  {
    question: "Which famous singer’s real name is Stefani Joanne Angelina Germanotta?",
    answers: ["Katy Perry", "Cher", "Beyonce", "Lady Gaga"],
    correctAnswer: 3
  },
  
  {
    question: "What is the least common M&M color?",
    answers: ["Blue", "Yellow", "Brown", "Green"],
    correctAnswer: 2
  },
  
  {
    question: "What type of food holds the world record for being the most stolen around the globe?",
    answers: ["Candy", "Cheese", "Meat", "Chips"],
    correctAnswer: 1
  },
  
  {
    question: "In which state were chocolate chip cookies invented in?",
    answers: ["Virginia", "Maryland", "Massachusetts", "Connecticut"],
    correctAnswer: 2
  },
  
  {
    question: "Outside of the US, Cool ranch doritos are known as what?",
    answers: ["Cool tang", "Glacier ranch", "Tangy tortilla", "Cool American"],
    correctAnswer: 3
  },
  
  {
    question: "Which is the loudest animal on Earth?",
    answers: ["Sperm whale", "Howler monkey", "Blue whale", "Elephant"],
    correctAnswer: 0
  },

  {
    question: "Which of Shakespeare's plays is the longest?",
    answers: ["Hamlet", "Romeo and Juliet", "Macbeth", "A Midsummer Night's Dream"],
    correctAnswer: 0
  },

  {
    question: "Which planet is the hottest in our solar system?",
    answers: ["Mercury", "Venus", "Mars", "Earth"],
    correctAnswer: 1
  },

  {
    question: "Which country produces the most coffee in the world?",
    answers: ["Indonesia", "Colombia", "Brazil", "Ethiopia"],
    correctAnswer: 2
  },

  {
    question: "Legend says that a(n) _____ man discovered coffee",
    answers: ["Ethopian", "Colombian", "Costa Rican", "Guatemalan"],
    correctAnswer: 0
  },

  {
    question: "How many eyes does a bee have?",
    answers: ["Two", "Three", "Four", "Five"],
    correctAnswer: 3
  },
]


