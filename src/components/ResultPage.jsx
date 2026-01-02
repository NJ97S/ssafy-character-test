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
          <p className="result-description">
            {characterData.description.split(",").map((part, index, array) => (
              <span key={index}>
                {part.trim()}
                {index < array.length - 1 && ","}
                {index < array.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div className="result-cta">
          <p className="result-cta-text">
            당신의 강점이 더욱 빛날 수 있는 곳, SSAFY에서 함께해요!
          </p>
        </div>

        <button className="restart-button" onClick={onRestart}>
          다시 검사하기
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
