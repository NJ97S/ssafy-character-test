import './QuestionPage.css';

function QuestionPage({ question, currentQuestion, totalQuestions, onAnswer }) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="question-container">
      <div className="question-content">
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-text">
            {currentQuestion} / {totalQuestions}
          </div>
        </div>

        <h2 className="question-text">{question.question}</h2>

        <div className="options-container">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => onAnswer(option.type)}
            >
              <span className="option-label">{String.fromCharCode(65 + index)}.</span>
              <span className="option-text">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;

