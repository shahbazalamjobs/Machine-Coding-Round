import React, { useState } from "react";
import "./App.css";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
    answer: "Bill Gates",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option;
    setUserAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(quizData.length).fill(null));
    setShowResult(false);
  };

  const score = userAnswers.reduce((total, answer, index) => {
    return answer === quizData[index].answer ? total + 1 : total;
  }, 0);

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>

      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} / {quizData.length}</h2>
          {quizData.map((q, i) => (
            <div key={i} className="review-card">
              <h4>{i + 1}. {q.question}</h4>
              <p>
                <strong>Your Answer:</strong>{" "}
                <span className={userAnswers[i] === q.answer ? "correct" : "wrong"}>
                  {userAnswers[i] || "Not Answered"}
                </span>
              </p>
              {userAnswers[i] !== q.answer && (
                <p>
                  <strong>Correct Answer:</strong>{" "}
                  <span className="correct">{q.answer}</span>
                </p>
              )}
            </div>
          ))}
          <button onClick={restartQuiz}>Restart</button>
        </div>
      ) : (
        <div className="question-card">
          <h3>{quizData[currentQuestion].question}</h3>
          <div className="options">
            {quizData[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className={userAnswers[currentQuestion] === option ? "selected" : ""}
              >
                {option}
              </button>
            ))}
          </div>

          <p className="progress">
            Question {currentQuestion + 1} of {quizData.length}
          </p>

          <div className="navigation">
            <button onClick={prevQuestion} disabled={currentQuestion === 0}>
              Prev
            </button>
            {currentQuestion < quizData.length - 1 ? (
              <button onClick={nextQuestion}>Next</button>
            ) : (
              <button onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
