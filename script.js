let currentQuestion = 0;
let score = 0;
let level = 1;
let isMusicPlaying = true;

// Sons
const correctSound = new Audio('sounds/correct.mp3');
const incorrectSound = new Audio('sounds/incorrect.mp3');

// Música de fundo
const backgroundMusic = new Audio('sounds/background-music.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.08;
backgroundMusic.play().catch(() => {}); // Tentar autoplay

const questions = [
  { question: "O verbo 'assistir' no sentido de ver exige a preposição:", answers: ['A', 'Em', 'Com', 'De'], correctAnswer: 0 },
  { question: "O substantivo 'amor' exige qual preposição?", answers: ['Por', 'Em', 'A', 'De'], correctAnswer: 0 },
  { question: "O verbo 'obedecer' exige a preposição:", answers: ['A', 'Com', 'Por', 'De'], correctAnswer: 0 },
  { question: "O verbo 'preferir' exige:", answers: ['A', 'Com', 'Em', 'De'], correctAnswer: 0 },
  { question: "O verbo 'confiar' exige:", answers: ['Em', 'A', 'De', 'Para'], correctAnswer: 0 },
  { question: "O substantivo 'respeito' exige qual preposição?", answers: ['Por', 'A', 'Em', 'Com'], correctAnswer: 0 },
  { question: "O verbo 'aspirar' no sentido de desejar exige:", answers: ['A', 'Por', 'De', 'Com'], correctAnswer: 1 },
  { question: "O verbo 'chegar' exige qual preposição?", answers: ['A', 'Em', 'Por', 'De'], correctAnswer: 0 },
  { question: "O verbo 'lembrar' sem pronome exige:", answers: ['De', 'Com', 'A', 'Por'], correctAnswer: 0 },
  { question: "O verbo 'esquecer' com pronome exige:", answers: ['De', 'A', 'Com', 'Por'], correctAnswer: 0 }
];

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById('finalScore').textContent = "Sua pontuação é: " + score;
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('finalScreen').style.display = 'block';
    return;
  }

  const q = questions[currentQuestion];
  document.getElementById('question').textContent = q.question;
  document.getElementById('answer1').textContent = q.answers[0];
  document.getElementById('answer2').textContent = q.answers[1];
  document.getElementById('answer3').textContent = q.answers[2];
  document.getElementById('answer4').textContent = q.answers[3];

  document.getElementById('score').textContent = score;
  document.getElementById('level').textContent = level;
}

function checkAnswer(index) {
  const isCorrect = questions[currentQuestion].correctAnswer === index;
  isCorrect ? correctSound.play() : incorrectSound.play();

  if (isCorrect) {
    score++;
    if (score % 2 === 0) level++;
  }

  currentQuestion++;
  showQuestion();
}

function skipQuestion() {
  currentQuestion++;
  showQuestion();
}

function startQuiz() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  backgroundMusic.play().catch(() => {});
  showQuestion();
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  level = 1;
  document.getElementById('finalScreen').style.display = 'none';
  document.getElementById('startScreen').style.display = 'block';
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
}

function showInstructions() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('instructionsScreen').style.display = 'block';
}

function backToStart() {
  document.getElementById('instructionsScreen').style.display = 'none';
  document.getElementById('startScreen').style.display = 'block';
}

function exitQuiz() {
  currentQuestion = 0;
  score = 0;
  level = 1;
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('startScreen').style.display = 'block';
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
}

function toggleMusic() {
  if (isMusicPlaying) {
    backgroundMusic.pause();
  } else {
    backgroundMusic.play().catch(() => {});
  }
  isMusicPlaying = !isMusicPlaying;
}
