import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

import IntroPage from "./components/IntroPage";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";
import { questions, characterResults } from "./data/questions";

function App() {
  const [currentPage, setCurrentPage] = useState("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setCurrentPage("question");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 모든 질문 완료 - 결과 계산
      const calculatedResult = calculateResult(newAnswers);
      setCurrentPage("result");
      setResult(calculatedResult);

      // 여기에 API 호출 코드 추가
      // 비율 계산
      const counts = {
        스타티: 0,
        알지: 0,
        핏: 0,
        와이즈: 0,
      };

      newAnswers.forEach((answer) => {
        counts[answer]++;
      });

      const percentages = {
        스타티: (counts.스타티 / newAnswers.length) * 100,
        알지: (counts.알지 / newAnswers.length) * 100,
        핏: (counts.핏 / newAnswers.length) * 100,
        와이즈: (counts.와이즈 / newAnswers.length) * 100,
      };

      // 최종 결과 타입 찾기
      let maxCount = 0;
      let resultType = "스타티";
      Object.keys(counts).forEach((type) => {
        if (counts[type] > maxCount) {
          maxCount = counts[type];
          resultType = type;
        }
      });

      // API 호출 (비동기, 에러는 콘솔에만 출력)
      fetch("/api/save-result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resultType: resultType,
          characterCounts: counts,
          totalQuestions: newAnswers.length,
          percentages: percentages,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Result saved:", data);
        })
        .catch((error) => {
          console.error("Failed to save result:", error);
          // 사용자에게는 에러를 표시하지 않음 (선택사항)
        });
    }

    // if (currentQuestionIndex < questions.length - 1) {
    //   setCurrentQuestionIndex(currentQuestionIndex + 1);
    // } else {
    //   // 모든 질문 완료 - 결과 계산
    //   const calculatedResult = calculateResult(newAnswers);
    //   setCurrentPage("result");
    //   setResult(calculatedResult);
    // }
  };

  const calculateResult = (answers) => {
    const counts = {
      스타티: 0,
      알지: 0,
      핏: 0,
      와이즈: 0,
    };

    answers.forEach((answer) => {
      counts[answer]++;
    });

    // 가장 많이 선택된 타입 찾기
    let maxCount = 0;
    let resultType = "스타티";

    Object.keys(counts).forEach((type) => {
      if (counts[type] > maxCount) {
        maxCount = counts[type];
        resultType = type;
      }
    });

    return characterResults[resultType];
  };

  const handleRestart = () => {
    setCurrentPage("intro");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="App">
      {currentPage === "intro" && <IntroPage onStart={handleStart} />}
      {currentPage === "question" && (
        <QuestionPage
          question={questions[currentQuestionIndex]}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {currentPage === "result" && result && (
        <ResultPage result={result} onRestart={handleRestart} />
      )}
      <Analytics />
    </div>
  );
}

export default App;
