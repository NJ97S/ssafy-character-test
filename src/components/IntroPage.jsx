import { useState } from "react";
import "./IntroPage.css";
import { allCharacters } from "../data/questions";

function IntroPage({ onStart }) {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (characterTitle, e) => {
    setImageErrors((prev) => ({
      ...prev,
      [characterTitle]: true,
    }));
    e.target.style.display = "none";
  };

  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1 className="intro-title">당신은 어떤 싸피형 인간인가요?</h1>
        <p className="intro-description">
          질문에서 나와 가장 가까운 선택지를 골라주세요.
        </p>

        <div className="characters-preview">
          {allCharacters.map((character, index) => (
            <div key={index} className="character-preview-item">
              <div
                className="character-image-wrapper"
                style={{
                  backgroundColor: imageErrors[character.title]
                    ? character.color
                    : `${character.color}40`,
                }}
              >
                {!imageErrors[character.title] && (
                  <img
                    src={character.image}
                    alt={character.title}
                    className="character-preview-image"
                    onError={(e) => handleImageError(character.title, e)}
                    onLoad={(e) => {
                      // 이미지 로드 성공 시 표시
                      e.target.style.display = "block";
                    }}
                  />
                )}
                {imageErrors[character.title] && (
                  <div className="character-placeholder">
                    {character.title.charAt(0)}
                  </div>
                )}
              </div>
              <span className="character-preview-name">{character.title}</span>
            </div>
          ))}
        </div>

        <button className="start-button" onClick={onStart}>
          검사 시작하기
        </button>
      </div>
    </div>
  );
}

export default IntroPage;
