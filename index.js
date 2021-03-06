const rL = require("readline-sync");
const chalk = require("chalk");
const { questions, highScore, members, color } = require("./data.js");

// prints the coreect answer of all wrong aanswered questions
function printRightAnswers(rgbCol, wrongAnswered) {
  if (wrongAnswered.length > 0) {
    console.log(chalk.rgb(255, 122, 20)("The correct answers for the questions you missed: \n"));
    wrongAnswered.forEach(e => {
      console.log((`que: ${chalk.rgb(rgbCol.r, rgbCol.g, rgbCol.b)(`${e.question}`)}\nans: ${chalk.rgb(rgbCol.r, rgbCol.g, rgbCol.b)(`${e.correctAns}`)}\n\n`));
    })
  }
}

// print questions and checks answer
function game(index, question, options, answer, color, wrongAnswered) {
  var score = 0;
  console.log("\n--------------------------------------\n");
  console.log(chalk.rgb(color.r, color.g, color.b)(`${index + 1}. ${question}`));
  var usrAns = rL.keyInSelect(options, "Enter: ");
  if (usrAns === answer) {
    console.log(chalk.green("\nYayy! You got that one 🤩"));
    score += 2;
  } else {
    console.log(chalk.redBright("\nOops! You are wrong 🙁"));
    --score;
    wrongAnswered.push({
      question,
      correctAns: options[answer]
    });
  }
  return score;
}

//function to get name of user
function getName() {
  return rL.question("Please enter your name: ");
}

// start of program
function quizStart() {
  console.log(chalk.rgb(191, 9, 232).underline.bold("BTS Fan Quiz\n"));
  console.log(chalk.rgb(255, 239, 64)("Here's a trivia about BTS, check if you know all the answer about your bias 😉\n\n"));

  var usrName = "";
  while ((usrName = getName().trim()) === "")
    console.log(chalk.red.bold("Please enter your name without blank space!\n"));

  console.log(chalk.cyanBright(`\n\nWelcome ${usrName} 😃\n\n`));

  console.log(chalk.rgb(255, 239, 64)(`Rules of the game:\n 
1. Choose your bias
2. There are total 10 questions about each member
3. For each correct answer you will get 2 points
4. For each wrong answer or skipped question 1 point will be deducted
5. At the end scoreboard will be displayed`));

  console.log(`\n\nWho's your bias?`);
  var usrBias = rL.keyInSelect(members, `Enter `);

  if (usrBias === -1) {
    console.log(chalk.redBright("\nYou chose CANCEL. Ending the quiz!"));
    process.exit();
  }

  var wrongAnswered = [], score = 0;
  for (var i = 0; i < questions[usrBias].length; i++) {
    var tempScore = game(i, questions[usrBias][i].question, questions[usrBias][i].options, questions[usrBias][i].answer, color[usrBias], wrongAnswered);
    if (tempScore < 0)
      score = score ? score + tempScore : score;
    else
      score += tempScore;
    console.log(chalk.whiteBright.bold(`Your current score is: ${score}`));
  }

  console.log(chalk.rgb(255, 236, 25).bold(`\n\nYour final score is: ${score}\n\n`));

  printRightAnswers(color[usrBias], wrongAnswered);

  for (var i = 0; i < highScore[usrBias].length; i++) {
    if (score >= highScore[usrBias][i].score) {
      highScore[usrBias].splice(i, 0, {
        name: usrName,
        score
      })
      console.log(chalk.rgb(191, 9, 232)("Congratulations!🎉 You made it into the score board!\n\n"));
      break;
    }
  }
  if (highScore[usrBias].length < 3 && score > 5) {
    console.log(chalk.rgb(191, 9, 232)("Wow! You did well!👏\n\n"));
  }

  console.log(chalk.rgb(255, 236, 25)("Score board:"));
  highScore[usrBias].forEach(e => {
    console.log(`${e.name}: ${e.score}`);
  });
  console.log(chalk.rgb(191, 9, 232)("\n\nThank you for taking the quiz ❤❤️❤"));
}

do {
  console.clear();
  quizStart();
  console.log("\n--------------------------------------\n");
  console.log("\nDo you want to play the quiz again?");
  var playAgain = rL.keyInSelect(["YES", "NO"], "Enter: ");
} while (!playAgain);