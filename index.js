var readline = require("readline-sync");
var score = 0;
var user;

const welcome = () => {
  user = readline.question("May I know your name first?\n");
  user = user.charAt(0).toUpperCase() + user.toLowerCase().slice(1);

  console.log(`Welcome ${user} to DO YOU KNOW Sarthak!`);
};

const playGame = () => {
  // Array of quiz questions and answers
  const questions = [
    {
      que: "Who's my favorite Superhero?",
      ans: "batman",
    },
    {
      que: "I live in which city?",
      ans: "indore",
    },
    {
      que: "What is my favorite color?",
      ans: "black",
    },
    {
      que: "What do I love more, Instagram or Twitter?",
      ans: "twitter",
    },
  ];

  // For loop for questions
  questions.forEach((data, index) => {
    var response = readline.question(`${index + 1}. ${data.que}\n`);
    checkAnswer(data, response);
  });
};

// function that checks answers and update score
function checkAnswer(data, res) {
  if (data.ans === res.toLowerCase()) {
    score++;
    console.log(`Correct Answer :))`);
  } else {
    score--;
    console.log(`Incorrect Answer :(`);
  }
  console.log(`-----\nCurrent SCORE: ${score}\n-----`);
}

const finalScore = () => {
  console.log(`\nThanks ${user} for using my Quiz App\nYAY! YOUR FINAL SCORE: ${score}`);
};

welcome();
playGame();
finalScore();
