// State variables
let questionNumber = 1;
let score = 0;

// Runs when an answer button is clicked
function answer(points) {
  score += points;
  document.getElementById("q" + questionNumber).style.display = "none";
  questionNumber += 1;
  console.log("Question: " + questionNumber + ", Score: " + score);

  if (questionNumber <= 3) {
    document.getElementById("q" + questionNumber).style.display = "block";
  } else {
    showResult();
  }
}

// Picks one of three outcomes based on the score
function showResult() {
  let title;
  let image;
  let color;

  if (score <= 5) {
    title = "You are a Panda! Calm and cozy.";
    image = "https://commons.wikimedia.org/wiki/Special:FilePath/Giant_Panda_2004-03-2.jpg?width=600";
    color = "honeydew";
  } else if (score <= 7) {
    title = "You are a Cat! Independent and curious.";
    image = "https://commons.wikimedia.org/wiki/Special:FilePath/Cat_November_2010-1a.jpg?width=600";
    color = "lavender";
  } else {
    title = "You are a Lion! Bold and brave.";
    image = "https://commons.wikimedia.org/wiki/Special:FilePath/Lion_waiting_in_Namibia.jpg?width=600";
    color = "khaki";
  }

  document.body.style.backgroundColor = color;
  document.getElementById("resultTitle").innerHTML = title;
  document.getElementById("resultImage").src = image;
  document.getElementById("result").style.display = "block";
}

// Resets the state and starts over
function restart() {
  questionNumber = 1;
  score = 0;
  document.body.style.backgroundColor = "lightyellow";
  document.getElementById("result").style.display = "none";
  document.getElementById("q1").style.display = "block";
}
