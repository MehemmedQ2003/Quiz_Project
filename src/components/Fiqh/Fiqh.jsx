import { useState, useEffect } from 'react';
import './Fiqh.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../layout/header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Fiqh = ({ questions }) => {
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

    const handleAnswerSelect = (questionId, answer) => {
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };

    const handleSubmit = () => {
        if (Object.keys(userAnswers).length < questions.length) {
            setShowAlert(true);
        } else {
            setShowResults(true);
            setShowAlert(false);
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
        <div className="question-container container py-3" data-aos="fade-up">
            <Header />
            <h3 className='quiz-title text-center fw-bold p-1 rounded-3'>Fiqh</h3>
            {questions.map((question) => (
                <div
                    key={question.id}
                    className={`question p-3 border border-primary rounded-3 my-3 ${showResults ? getAnswerStatus(question, userAnswers[question.id]) : ''}`}
                    style={{ backgroundColor: showResults && getAnswerStatus(question, userAnswers[question.id]) === 'correct' ? 'lightgreen' : showResults ? 'lightcoral' : 'white' }}
                >
                    <h2><b>{question.id}.</b> {question.questionTitle}</h2>
                    <ul>
                        {question.answers.map((answer) => (
                            <li key={answer} >
                                <label className='answer-label fs-5 d-flex gap-2 '>
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
                        <div className="result-text mt-2">
                            {getAnswerStatus(question, userAnswers[question.id]) === 'incorrect' && (
                                <p className='text-white fs-5'><b>Doğru cavab:</b> {question.correctAnswers.join(', ')}</p>
                            )}
                        </div>
                    )}
                </div>
            ))}
            {!showResults && (
                <button onClick={handleSubmit} className="submit-button btn btn-primary" data-aos="fade-left">
                    Cavabları gör
                </button>
            )}
            {showAlert && (
                <div className="alert alert-danger bg-danger text-white alert-dismissible fade show my-4" role="alert">
                    Zəhmət olmasa bütün sualları cavablandırın.
                    <button type="button" className="btn-close" onClick={() => setShowAlert(false)} aria-label="Close"></button>
                </div>
            )}
            {showResults && (
                <div className="results-summary text-center mt-4">
                    <h4 className="fw-bold fs-2">Nəticə:</h4>
                    <p className='fs-4 text-success fw-bold'>Doğru cavabların sayı: {correctCount}</p>
                    <p className='fs-4 text-danger fw-bold'>Səhv cavabların sayı: {incorrectCount}</p>
                </div>
            )}
        </div>
    );
};

export default Fiqh;
