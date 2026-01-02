import "./IntroPage.css";

function IntroPage({ onStart }) {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1 className="intro-title">나는 어떤 개발자일까?</h1>
        <p className="intro-subtitle">
          SSAFY 캐릭터로 알아보는 개발성향 테스트
        </p>

        <div className="main-character-image-wrapper">
          <img
            src="/images/characters-main.png"
            alt="SSAFY 캐릭터들"
            className="main-character-image"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        <p className="intro-description">
          질문에서 나와 가장 가까운 답을 골라주세요.
        </p>

        <button className="start-button" onClick={onStart}>
          검사 시작하기
        </button>
      </div>
    </div>
  );
}

export default IntroPage;
