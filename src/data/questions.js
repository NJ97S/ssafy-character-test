export const questions = [
  {
    id: 1,
    question: "새로운 프로젝트가 시작됐다. 가장 먼저 드는 생각은?",
    options: [
      { text: "일단 시작하자. 하면서 맞추면 되지", type: "스타티" },
      { text: "이전에 비슷한 실패 사례가 있었지… 그때 뭐가 문제였더라", type: "알지" },
      { text: "누가 어떤 역할을 하면 좋을지부터 떠오른다", type: "핏" },
      { text: "왜 이 프로젝트를 하는지부터 정리돼야 할 것 같다", type: "와이즈" }
    ]
  },
  {
    id: 2,
    question: "팀 프로젝트 중간, 예상치 못한 문제가 생겼다.",
    options: [
      { text: "다른 방법으로 바로 우회해서 시도해본다", type: "스타티" },
      { text: "실패 원인을 정리하고 다시 같은 문제를 재현해본다", type: "알지" },
      { text: "팀원들과 상황을 공유하며 해결 방향을 조율한다", type: "핏" },
      { text: "근본 원인이 뭔지 파고들며 구조를 다시 본다", type: "와이즈" }
    ]
  },
  {
    id: 3,
    question: "당신이 프로젝트에서 가장 자주 듣는 말은?",
    options: [
      { text: "\"와… 진짜 빠르다\"", type: "스타티" },
      { text: "\"그거 실패한 덕분에 지금 해결된 거야\"", type: "알지" },
      { text: "\"덕분에 팀 분위기가 정리됐어\"", type: "핏" },
      { text: "\"그걸 그렇게까지 생각했다고?\"", type: "와이즈" }
    ]
  },
  {
    id: 4,
    question: "결과물이 마감 직전에 나왔다. 당신의 반응은?",
    options: [
      { text: "일단 돌아가잖아! 다행이다", type: "스타티" },
      { text: "이번엔 어디서 실수했는지 정리해두자", type: "알지" },
      { text: "다들 고생했어, 한 번 같이 점검해보자", type: "핏" },
      { text: "이 구조, 다음엔 더 단순하게 만들 수 있을 것 같은데…", type: "와이즈" }
    ]
  },
  {
    id: 5,
    question: "프로젝트를 하며 가장 스트레스 받는 순간은?",
    options: [
      { text: "속도가 안 날 때", type: "스타티" },
      { text: "실패 원인을 알 수 없을 때", type: "알지" },
      { text: "팀 분위기가 어색해질 때", type: "핏" },
      { text: "왜 이렇게 되는지 설명이 안 될 때", type: "와이즈" }
    ]
  },
  {
    id: 6,
    question: "팀에서 맡게 되는 역할은 보통?",
    options: [
      { text: "시작 버튼을 누르는 사람", type: "스타티" },
      { text: "문제를 끝까지 파보는 사람", type: "알지" },
      { text: "사람과 일을 연결하는 사람", type: "핏" },
      { text: "방향과 기준을 잡는 사람", type: "와이즈" }
    ]
  },
  {
    id: 7,
    question: "당신의 약점에 가장 가까운 설명은?",
    options: [
      { text: "디테일을 놓치고 성급해질 때가 있다", type: "스타티" },
      { text: "정답에 집착하다가 유연함을 잃을 때가 있다", type: "알지" },
      { text: "결정을 미루다 타이밍을 놓칠 때가 있다", type: "핏" },
      { text: "생각이 많아 실행이 늦어질 때가 있다", type: "와이즈" }
    ]
  },
  {
    id: 8,
    question: "아래 문장 중 가장 찔리는 것은?",
    options: [
      { text: "\"완성도는 나중 문제지\"", type: "스타티" },
      { text: "\"실패도 결국 데이터야\"", type: "알지" },
      { text: "\"이건 누가 정리해줘야 할 것 같아\"", type: "핏" },
      { text: "\"근데 이건 왜 이렇게 되는 거야?\"", type: "와이즈" }
    ]
  }
];

export const characterResults = {
  "스타티": {
    title: "스타티형",
    subtitle: "시작이 빠르고, 판을 여는 사람",
    description: "실행력과 추진력이 강한 타입",
    detail: "팀에 에너지를 불어넣는다",
    weakness: "단, 속도에 비해 디테일은 놓칠 수 있음",
    quote: "\"스타티형이 없으면, 프로젝트는 시작되지 않는다.\"",
    image: "/images/starty.png",
    color: "#A8E6CF"
  },
  "알지": {
    title: "알지형",
    subtitle: "실패를 자산으로 바꾸는 사람",
    description: "실패 데이터를 학습 자원으로 활용",
    detail: "에러를 두려워하지 않는 멘탈",
    weakness: "가끔 '정답'에 집착해 유연함이 줄어들 수 있음",
    quote: "\"알지형은 팀의 경험치를 올린다.\"",
    image: "/images/alji.png",
    color: "#FFE5B4"
  },
  "핏": {
    title: "핏형",
    subtitle: "사람과 일을 이어주는 사람",
    description: "팀워크와 조율에 강점",
    detail: "갈등을 조용히 정리하는 타입",
    weakness: "자신의 역량을 과소평가하는 경향",
    quote: "\"핏형이 있으면, 팀은 무너지지 않는다.\"",
    image: "/images/fit.png",
    color: "#FFB6C1"
  },
  "와이즈": {
    title: "와이즈형",
    subtitle: "본질을 파고드는 탐구자",
    description: "구조와 원리를 깊이 이해",
    detail: "직관적 통찰력과 분석력이 뛰어남",
    weakness: "깊이 생각하다 실행이 늦어질 수 있음",
    quote: "\"와이즈형은 팀의 방향을 만든다.\"",
    image: "/images/wise.png",
    color: "#B0E0E6"
  }
};

export const allCharacters = [
  characterResults["스타티"],
  characterResults["핏"],
  characterResults["알지"],
  characterResults["와이즈"]
];

