export const questions = [
  {
    id: 1,
    question: "새로운 프로젝트가 시작됐다. 가장 먼저 드는 생각은?",
    options: [
      { text: "일단 시작하자. 하면서 맞추면 되지", type: "스타티" },
      {
        text: "이전에 비슷한 실패 사례가 있었지… 그때 뭐가 문제였더라",
        type: "알지",
      },
      { text: "누가 어떤 역할을 하면 좋을지부터 떠오른다", type: "핏" },
      {
        text: "왜 이 프로젝트를 하는지부터 정리돼야 할 것 같다",
        type: "와이즈",
      },
    ],
  },
  {
    id: 2,
    question: "팀 프로젝트 중간, 예상치 못한 문제가 생겼다.",
    options: [
      { text: "다른 기능부터 구현하며 다시 돌아온다", type: "스타티" },
      { text: "방법을 바꿔가며 될 때까지 붙잡는다", type: "알지" },
      { text: "팀원들과 상황을 공유하며 해결 방향을 조율한다", type: "핏" },
      { text: "근본 원인이 뭔지 파고들며 구조를 다시 본다", type: "와이즈" },
    ],
  },
  {
    id: 3,
    question: "당신이 팀플을 할 때 가장 자주 듣는 말은?",
    options: [
      { text: '"와… 진짜 빠르다"', type: "스타티" },
      { text: '"와 진짜 그걸 끝까지 했어? 대단하다"', type: "알지" },
      { text: '"덕분에 팀 분위기가 정리됐어"', type: "핏" },
      { text: '"그걸 그렇게까지 생각했다고?"', type: "와이즈" },
    ],
  },
  {
    id: 4,
    question: "결과물이 마감 직전에 나왔다. 당신의 반응은?",
    options: [
      { text: "일단 돌아가잖아! 다행이다", type: "스타티" },
      { text: "이번엔 어디서 실수했는지 정리해두자", type: "알지" },
      { text: "다들 고생했어, 한 번 같이 점검해보자", type: "핏" },
      {
        text: "이 구조, 다음엔 더 단순하게 만들 수 있을 것 같은데…",
        type: "와이즈",
      },
    ],
  },
  {
    id: 5,
    question: "프로젝트를 하며 가장 스트레스 받는 순간은?",
    options: [
      { text: "생각은 많은데, 아직 아무것도 못 해봤을 때", type: "스타티" },
      { text: "문제가 안 풀린 채로 멈춰야 할 때", type: "알지" },
      { text: "팀원들 사이에 말이 잘 안 통할 때", type: "핏" },
      { text: "방향 없이 흘러가는 느낌이 들 때", type: "와이즈" },
    ],
  },
  {
    id: 6,
    question: "팀에서 맡게 되는 역할은 보통?",
    options: [
      { text: "시작 버튼을 누르는 사람", type: "스타티" },
      { text: "문제를 끝까지 파보는 사람", type: "알지" },
      { text: "사람과 일을 연결하는 사람", type: "핏" },
      { text: "방향과 기준을 잡는 사람", type: "와이즈" },
    ],
  },
  {
    id: 7,
    question: "당신의 약점에 가장 가까운 설명은?",
    options: [
      { text: "디테일을 놓치고 성급해질 때가 있다", type: "스타티" },
      { text: "정답에 집착하다가 유연함을 잃을 때가 있다", type: "알지" },
      { text: "결정을 미루다 타이밍을 놓칠 때가 있다", type: "핏" },
      { text: "생각이 많아 실행이 늦어질 때가 있다", type: "와이즈" },
    ],
  },
  {
    id: 8,
    question: "내가 생각하는 성장이란?",
    options: [
      { text: '"많이 시도해보고, 해보면서 배우는 것"', type: "스타티" },
      { text: '"어려운 문제를 결국 스스로 해결해내는 것"', type: "알지" },
      { text: '"혼자가 아니라, 함께 결과를 만들어가는 것"', type: "핏" },
      { text: '"무엇을 할지보다, 왜 해야 하는지를 아는 것"', type: "와이즈" },
    ],
  },
];

export const characterResults = {
  스타티: {
    title: "스타티(Statty)형",
    subtitle: "빠르게 시도하며 성장하는 개발자",
    description: "망설임 없이 도전하고, 생각을 행동으로 옮기는 실행력이 강점!",
    image: "/images/starty.png",
    color: "#A8E6CF",
  },
  알지: {
    title: "알지(Al.g)형",
    subtitle: "포기하지 않고 끝까지 시도하는 개발자",
    description:
      "막힌 문제를 여러 방식으로 풀어내며, 경험을 실력으로 쌓아가는 게 장점!",
    image: "/images/alji.png",
    color: "#FFE5B4",
  },
  핏: {
    title: "핏(Fit)형",
    subtitle: "팀의 흐름을 연결하는 개발자",
    description:
      "사람과 역할을 자연스럽게 잇고, 협업 속에서 힘을 발휘하는 데 탁월!",
    image: "/images/fit.png",
    color: "#FFB6C1",
  },
  와이즈: {
    title: "와이즈(Wise)형",
    subtitle: "구조와 방향을 설계하는 개발자",
    description: "끊임없는 사고로, 프로젝트의 방향성을 세우는 데 탁월!",
    image: "/images/wise.png",
    color: "#B0E0E6",
  },
};

export const allCharacters = [
  characterResults["스타티"],
  characterResults["핏"],
  characterResults["알지"],
  characterResults["와이즈"],
];
