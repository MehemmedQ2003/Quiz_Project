import { useState } from 'react';
import './EsmaulHusna.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../layout/header/Header';


const Question = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // Xəbərdarlıq üçün state

  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer
    }));
    setQuestionsAnswered(prevCount => prevCount + 1);
  };

  const handleSubmit = () => {
    if (questionsAnswered < questions.length) {
      setShowAlert(true); // Xəbərdarlığı göstər
    } else {
      setShowResults(true);
      setShowAlert(false); // Xəbərdarlığı gizlət
    }
  };

  const getAnswerStatus = (question, userAnswer) => {
    if (question.correctAnswers.includes(userAnswer)) {
      return 'correct';
    }
    return 'incorrect';
  };

  const getCorrectAndIncorrectCount = () => {
    let correctCount = 0;
    let incorrectCount = 0;

    questions.forEach(question => {
      if (getAnswerStatus(question, userAnswers[question.id]) === 'correct') {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    return { correctCount, incorrectCount };
  };

  const { correctCount, incorrectCount } = getCorrectAndIncorrectCount();

  return (
    <div className="question-container container py-3">
      <Header />
      <h3 className='quiz-title text-center fw-bold bg-primary text-white p-1 rounded-3'>Əsmaül Hüsna</h3>
      {questions.map((question) => (
        <div key={question.id} className="question p-3 border border-primary rounded-3 my-3">
          <h2><b>{question.id}.</b> {question.questionTitle}</h2>
          <ul>
            {question.answers.map((answer) => (
              <li key={answer}>
                <label className='answer-label fs-5 d-flex gap-2'>
                  <input
                    type="radio"
                    className='answer-input'
                    name={`question-${question.id}`}
                    value={answer}
                    checked={userAnswers[question.id] === answer}
                    onChange={() => handleAnswerSelect(question.id, answer)}
                    disabled={showResults}
                  />
                  {answer}
                </label>
              </li>
            ))}
          </ul>
          {showResults && (
            <p className={getAnswerStatus(question, userAnswers[question.id])}>
              {getAnswerStatus(question, userAnswers[question.id]) === 'correct' ? 'Correct!' : 'Incorrect'}
            </p>
          )}
        </div>
      ))}
      {!showResults && (
        <button onClick={handleSubmit} className="submit-button btn btn-primary">
          Cavabları götür
        </button>
      )}
      {showAlert && (
        <div className="alert alert-danger bg-danger text-white alert-dismissible fade show my-4" role="alert">
          Zəhmət olmasa bütün sualları cavablandırın.
          <button type="button" className="btn-close" onClick={() => setShowAlert(false)} aria-label="Close"></button>
        </div>
      )}
      {showResults && (
        <div className="results">
          <h2 className='text-center fw-bold bg-success text-white p-3 rounded-3 mt-5 mb-3'>Results</h2>
          <p className="text-center">Correct Answers: {correctCount}</p>
          <p className="text-center">Incorrect Answers: {incorrectCount}</p>
          {questions.map((question) => (
            <div key={question.id} className="result-item p-3 border border-primary rounded-3 my-3 w-75 mx-auto">
              <p><b style={{ color: 'red', fontSize: '20px' }}>{question.id}.</b> Sual: {question.questionTitle}</p>
              <p><b>Sənin cavabın:</b> {userAnswers[question.id] || 'Not answered'}</p>
              <p><b>Doğru cavab:</b> {question.correctAnswers.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
