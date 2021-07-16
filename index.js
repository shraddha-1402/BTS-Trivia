const rL = require("readline-sync");
const chalk = require("chalk");
const { questions } = require("./data.js");


var score = 0, wrongAnswered = [];

function game(question, options, answer) {
  console.log(chalk.cyanBright(question));
  if (usrAns === answer) {
    console.log(chalk.green("You are right :)"));
    score++;
  } else {
    console.log(chalk.redBright("Oops! You missed it :("));
    score > 0 ? score-- : score;
    wrongAnswered.push({
      "question": question,
      "correctAns": options[answer]
    });
  }
  console.log(chalk.whiteBright.bold(`Your current score is: ${score} \n\n`));
}

console.log(chalk.yellowBright.underline.bold(`BTS Fan Quiz\n`));
console.log(chalk.yellowBright(`Here's a trivia about BTS, check if you know all the answer about your bias 😉\n\n`));
console.log(chalk.cyanBright(`Welcome` + rL.question(`Please enter your name: `) + `!\n\n`));

console.log(`Who's your bias?`);
var members = ['Kim Namjoon', 'Kim Seokjin', 'Min Yoongi', 'Jung Hoseok', 'Park Jimin', 'Kim Taehyung', 'Jeon Jungkook'];
var usrBias = rL.keyInSelect(members, `Enter `);

for (var i = 0; i < questions[usrBias - 1].length; i++)
  game(questions[usrBias - 1][i].question, questions[usrBias - 1][i].options, questions[usrBias - 1][i].answer);

console.log(chalk.green(`Your total score is ${score} \nThank you for playing the game!`));
