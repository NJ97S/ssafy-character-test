import { useState } from "react";
import "./ResultPage.css";

function ResultPage({ result, onRestart }) {
  const characterData = result;
  const [imageError, setImageError] = useState(false);

  return (
    <div className="result-container">
      <div className="result-content">
        <div className="result-character-image-wrapper">
          <div
            className="result-character-background"
            style={{
              backgroundColor: imageError
                ? characterData.color
                : `${characterData.color}30`,
            }}
          >
            {!imageError ? (
              <img
                src={characterData.image}
                alt={characterData.title}
                className="result-character-image"
                onError={() => {
                  setImageError(true);
                }}
              />
            ) : (
              <div className="result-character-placeholder">
                {characterData.title.charAt(0)}
              </div>
            )}
          </div>
        </div>

        <div className="result-header">
          <h1 className="result-title">{characterData.title}</h1>
          <h2 className="result-subtitle">{characterData.subtitle}</h2>
        </div>

        <div className="result-body">
          <p className="result-description">{characterData.description}</p>
          <p className="result-detail">{characterData.detail}</p>
          <p className="result-weakness">{characterData.weakness}</p>
        </div>

        <div className="result-quote">{characterData.quote}</div>

        <button className="restart-button" onClick={onRestart}>
          다시 검사하기
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
