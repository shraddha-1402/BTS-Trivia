const rL = require("readline-sync");
const chalk = require("chalk");

var questions = [
  [
    {
      question: "\n\nHow many tracks does Namjoon's first mixtape have? ",
      options: [
        "7",
        "8",
        "10",
        "11"
      ],
      answer: "4"
    },
    {
      question: "Which track on RM's mixtape mono was produced by Honne? ",
      options: [
        "uhgood",
        "everythingoes",
        "seoul",
        "forever rain",
      ],
      answer: "3"
    },
    {
      question: "What's Namjoon's native place? Or where is Namjoon from?  ",
      options: [
        "Seoul",
        "Ilsan",
        "Daegu",
        "Gwangju",
      ],
      answer: "2"
    },
    {
      question: " what's the name of his 1st mixtape? ",
      options: [
        "Mono",
        "D2",
        "RM",
        "Rap Monster",
      ],
      answer: "3"
    },
  ],
  [
    {
      question: "\n\nWhat is the name of the BT21 character made by Jin? ",
      options: [
        "RG",
        "RJ",
        "RV",
        "RQ",
      ],
      answer: "2"
    },
  ],
  [
    {
      question: "\n\nYoongi released his 2nd mixtape in which year? ",
      options: [
        "2019",
        "2020",
        "2018",
        "2021",
      ],
      answer: "2"
    },
    {
      question: "Which of the following female artists has Yoongi not collabed with? ",
      options: [
        "Halsey",
        "IU",
        "Ailee",
        "Suran",
      ],
      answer: "3"
    },
    {
      question: "What is the name of the last track on Agust D mixtape? ",
      options: [
        "give it to me",
        "The last",
        "so far away ",
        "Tony Montana",
      ],
      answer: "3"
    },
  ],
  [
    {
      question: "\n\nWhat album does Hobi have 2 solo songs? ",
      options: [
        "HYYH pt 1",
        "Wings",
        "MOTS7",
        "LY : Answer",
      ],
      answer: "2"
    },
    {
      question: "What's name of Hobi's dog?",
      options: [
        "Monie",
        "Holly",
        "Gureum",
        "Mikey",
      ],
      answer: "4"
    },
  ],
  [
    {
      question: "\n\nJimin had his famous Orange colour hair during which era? ",
      options: [
        "I Need U",
        "DNA",
        "Run",
        "Spring Day",
      ],
      answer: "3"
    },
  ],
  [
    {
      question: "\n\nTaehyung's song 'Sweet Night' is an OST from which kdrama? ",
      options: [
        "It's okay to not be okay ",
        "Vincenzo",
        "Itaewon Class",
        "True Beauty",
      ],
      answer: "3"
    },
    {
      question: "What is the name of Taehyung's character in Hwarang? ",
      options: [
        "Soo-ho",
        "Seo-joon",
        "Han-sung",
        "Moo-myung",
      ],
      answer: "3"
    },
    {
      question: "In Go Go Halloween dance practice video, what character did Taehyung dress up as? ",
      options: [
        "Harley Quinn",
        "Snow White",
        "Naruto",
        "Joker",
      ],
      answer: "2"
    },
    {
      question: "Do i have siblings? ",
      options: [
        "option1",
        "option2",
        "option3",
        "option4",
      ],
      answer: "YES"
    },
    {
      question: "What is my sibling's name? ",
      options: [
        "option1",
        "option2",
        "option3",
        "option4",
      ],
      answer: "Kim Eun Jin"
    },
  ],
  [
    {
      question: "\n\nWhat is my name? ",
      options: [
        "option1",
        "option2",
        "option3",
        "option4",
      ],
      answer: "SHRADDHA"
    },
    {
      question: "What is my age? ",
      options: [
        "option1",
        "option2",
        "option3",
        "option4",
      ],
      answer: "20"
    },
    {
      question: "Where do i live? ",
      options: [
        "option1",
        "option2",
        "option3",
        "option4",
      ],
      answer: "NAGPUR"
    },
    {
      question: "Do i have siblings? ",
      options: [
        "option1",
        "option2",
        "option3",
        "option4",
      ],
      answer: "YES"
    },
    {
      question: "What is my sibling's name? ",
      options: [
        "option1",
        "option2",
        "option3",
        "option4",
      ],
      answer: "RAJAT"
    },
  ]
];

var score = 0;

var wrongAnswered = [];

function game(question, options, answer) {
  console.log(chalk.cyanBright(question));
  var usrAns = rL.keyInSelect(options, `Enter `);
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