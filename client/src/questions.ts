interface Question {
    question: string,
    answers: string[],
    correctAnswer: number,
  }
  
const question1 : Question = {
    question: "According to Greek mythology, who was the first woman on earth?",
    answers: ["Pandora", "Eve", "Athena", "Mary"],
    correctAnswer: 0
}

const question2 : Question = {
    question: "Which famous singer’s real name is Stefani Joanne Angelina Germanotta?",
    answers: ["Katy Perry", "Cher", "Beyonce", "Lady Gaga"],
    correctAnswer: 3
}

const question3 : Question = {
    question: "What is the least common M&M color?",
    answers: ["Blue", "Yellow", "Brown", "Green"],
    correctAnswer: 2
}

const question4 : Question = {
    question: "What type of food holds the world record for being the most stolen around the globe?",
    answers: ["Candy", "Cheese", "Meat", "Chips"],
    correctAnswer: 1
}

const question5 : Question = {
    question: "In which state were chocolate chip cookies invented in?",
    answers: ["Virginia", "Maryland", "Massachusetts", "Connecticut"],
    correctAnswer: 2
}

const question6 : Question = {
    question: "Outside of the US, Cool ranch doritos are known as what?",
    answers: ["Cool tang", "Glacier ranch", "Tangy tortilla", "Cool American"],
    correctAnswer: 3
}

const question7 : Question = {
    question: "Which is the loudest animal on Earth?",
    answers: ["Hamlet", "Romeo and Juliet", "Macbeth", "A Midsummer Night's Dream"],
    correctAnswer: 0
}

const question8 : Question = {
    question: "Which of Shakespeare's plays is the longest?",
    answers: ["Hamlet", "Romeo and Juliet", "Macbeth", "A Midsummer Night's Dream"],
    correctAnswer: 0
}

const question9 : Question = {
    question: "Which planet is the hottest in our solar system?",
    answers: ["Mercury", "Venus", "Mars", "Earth"],
    correctAnswer: 1
}

const question10 : Question = {
    question: "Which country produces the most coffee in the world?",
    answers: ["Indonesia", "Colombia", "Brazil", "Ethiopia"],
    correctAnswer: 2
}

const question11 : Question = {
    question: "Legend says that a(n) _____ man discovered coffee",
    answers: ["Ethopian", "Colombian", "Costa Rican", "Guatemalan"],
    correctAnswer: 0
}

const question12 : Question = {
    question: "How many eyes does a bee have?",
    answers: ["Two", "Three", "Four", "Five"],
    correctAnswer: 3
}


  export const questions: Question[] = []