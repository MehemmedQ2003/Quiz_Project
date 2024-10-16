import { useState, useEffect } from 'react';
import Header from '../../layout/header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './EsmaulHusna.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import questionsData from '../../data/questionsData.json';
import { Container, Row, Col, ButtonGroup, Button, Alert } from 'react-bootstrap';

const Tefsir = () => {
  const [selectedLevel, setSelectedLevel] = useState('easy');
  const { easy: easyQuestions, normal: normalQuestions, hard: hardQuestions } = questionsData.esmaulHusnaQuestions;
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    setUserAnswers({});
    setShowResults(false);
    setShowAlert(false);
  };

  const getCurrentQuestions = () => {
    let questions;
    switch (selectedLevel) {
      case 'easy':
        questions = easyQuestions;
        break;
      case 'normal':
        questions = normalQuestions;
        break;
      case 'hard':
        questions = hardQuestions;
        break;
      default:
        questions = easyQuestions;
    }
    return questions.map((q, index) => ({ ...q, id: index + 1 }));
  };

  const currentQuestions = getCurrentQuestions();

  const handleAnswerSelect = (questionId, answer) => {
    const question = currentQuestions.find(q => q.id === questionId);
    if (question.correctAnswers.length === 1) {
      setUserAnswers(prevAnswers => ({
        ...prevAnswers,
        [questionId]: [answer]
      }));
    } else {
      // Multiple correct answers, use checkbox behavior
      setUserAnswers(prevAnswers => {
        const currentAnswers = prevAnswers[questionId] || [];
        if (currentAnswers.includes(answer)) {
          return {
            ...prevAnswers,
            [questionId]: currentAnswers.filter(a => a !== answer)
          };
        } else {
          return {
            ...prevAnswers,
            [questionId]: [...currentAnswers, answer]
          };
        }
      });
    }
  };

  const handleShowResults = () => {
    if (Object.keys(userAnswers).length < currentQuestions.length) {
      setShowAlert(true);
    } else {
      setShowResults(true);
      setShowAlert(false);
    }
  };

  const getAnswerStatus = (question, userAnswer) => {
    if (!userAnswer) return 'incorrect';
    const correctSet = new Set(question.correctAnswers);
    const userSet = new Set(userAnswer);
    return (correctSet.size === userSet.size && 
            [...correctSet].every(value => userSet.has(value))) ? 'correct' : 'incorrect';
  };

  const getCorrectAndIncorrectCount = () => {
    let correctCount = 0;
    let incorrectCount = 0;

    currentQuestions.forEach(question => {
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
    <Container className="mt-4" data-aos="fade-down">
      <Header />
      <h1 className="text-center mb-4">Əsma-ul Hüsna Testi</h1>
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <ButtonGroup>
            {['easy', 'normal', 'hard'].map((level) => (
              <Button
                key={level}
                className='mx-2 border border-rounded border-dark border-5 rounded-5 px-4 fw-bold fs-5'
                style={{
                  backgroundColor: selectedLevel === level ? '#0B1B28' : 'white',
                  transition: 'background-color 0.3s ease'
                }}
                variant={selectedLevel === level ? 'dark' : 'outline-dark'}
                onClick={() => handleLevelChange(level)}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0B1B28'}
                onMouseLeave={(e) => e.target.style.backgroundColor = selectedLevel === level ? '#0B1B28' : 'white'}
              >
                {level === 'easy' ? 'Asan' : level === 'normal' ? 'Normal' : 'Çətin'}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      {currentQuestions.map((question) => (
        <div
          key={question.id}
          className={`question p-3 rounded-3 my-3 ${showResults ? getAnswerStatus(question, userAnswers[question.id]) : ''}`}
          style={{ backgroundColor: showResults && getAnswerStatus(question, userAnswers[question.id]) === 'correct' ? 'lightgreen' : showResults ? 'lightcoral' : 'white', border: '2px solid #0B1B28' }}
        >
          <h2><b>{question.id}.</b> {question.questionTitle}</h2>
          <ul>
            {question.answers.map((answer) => (
              <li key={answer}>
                <label className='answer-label fs-5 d-flex gap-2'>
                  <input
                    type={question.correctAnswers.length === 1 ? "radio" : "checkbox"}
                    className='answer-input'
                    name={`question-${question.id}`}
                    value={answer}
                    checked={userAnswers[question.id]?.includes(answer)}
                    onChange={() => handleAnswerSelect(question.id, answer)}
                    disabled={showResults}
                  />
                  {answer}
                </label>
              </li>
            ))}
          </ul>
          {showResults && getAnswerStatus(question, userAnswers[question.id]) === 'incorrect' && (
            <div className="result-text mt-2">
              <p className='text-white fs-5'><b>Doğru cavab:</b>
              <ul>
                {question.correctAnswers.map((correctAnswer) => (
                  <li key={correctAnswer} className='text-dark'>{correctAnswer}</li>
                ))}
              </ul>
              </p>
            </div>
          )}
        </div>
      ))}
      {!showResults && (
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Button style={{ backgroundColor: '#0B1B28', color: 'white', border: '2px solid #0B1B28' }} onClick={handleShowResults} data-aos="fade-left">
              Nəticələri göstər
            </Button>
          </Col>
        </Row>
      )}
      {showAlert && (
        <Alert variant="danger" className="mt-4 bg-danger text-white" onClose={() => setShowAlert(false)} dismissible>
          Zəhmət olmasa bütün sualları cavablandırın.
        </Alert>
      )}
      {showResults && (
        <div className="results-summary text-center mt-4">
          <h4 className="fw-bold fs-2">Nəticə:</h4>
          <p className='fs-4 text-success fw-bold'>Doğru cavabların sayı: {correctCount}</p>
          <p className='fs-4 text-danger fw-bold'>Səhv cavabların sayı: {incorrectCount}</p>
        </div>
      )}
    </Container>
  );
};

export default Tefsir;