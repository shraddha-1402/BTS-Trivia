var questions = [
  [
    {
      question: "How many tracks does Namjoon's first mixtape have?",
      options: [
        "7",
        "8",
        "10",
        "11"
      ],
      answer: 3
    },
    {
      question: "Which track on RM's mixtape mono was produced by Honne?",
      options: [
        "uhgood",
        "everythingoes",
        "seoul",
        "forever rain",
      ],
      answer: 2
    },
    {
      question: "What's Namjoon's native place? Or where is Namjoon from?",
      options: [
        "Seoul",
        "Ilsan",
        "Daegu",
        "Gwangju",
      ],
      answer: 1
    },
    {
      question: "What's the name of his 1st mixtape?",
      options: [
        "Mono",
        "D2",
        "RM",
        "Rap Monster",
      ],
      answer: 2
    },
  ],
  [
    {
      question: "What is the name of the BT21 character made by Jin?",
      options: [
        "RG",
        "RJ",
        "RV",
        "RQ",
      ],
      answer: 1
    },
    {
      question: "Epiphany music video was released as a comeback trailer for which BTS album?",
      options: [
        "You never walk alone",
        "Love yourself : Tear",
        "Love yourself : Her",
        "Love yourself : Answer",
      ],
      answer: 3
    },
  ],
  [
    {
      question: "Yoongi released his 2nd mixtape in which year?",
      options: [
        "2019",
        "2020",
        "2018",
        "2021",
      ],
      answer: 1
    },
    {
      question: "Which of the following female artists has Yoongi not collabed with?",
      options: [
        "Halsey",
        "IU",
        "Ailee",
        "Suran",
      ],
      answer: 2
    },
    {
      question: "What is the name of the last track on Agust D mixtape?",
      options: [
        "give it to me",
        "The last",
        "so far away ",
        "Tony Montana",
      ],
      answer: 2
    },
  ],
  [
    {
      question: "What is the name of the second single from Hobi's mixtape Hope World?",
      options: [
        "Daydream",
        "Base line",
        "Airplane",
        "Blue Side",
      ],
      answer: 2
    },
    {
      question: "What album does Hobi have 2 solo songs? ",
      options: [
        "HYYH pt 1",
        "Wings",
        "MOTS7",
        "LY : Answer",
      ],
      answer: 1
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
      question: "Jimin had his famous Orange colour hair during which era? ",
      options: [
        "I Need U",
        "DNA",
        "Run",
        "Spring Day",
      ],
      answer: 2
    },
    {
      question: "What genre is Jimin's solo song Serendipity?",
      options: [
        "Contemporary R&B",
        "Alternative R&B",
        "Latin R&B",
        "Neo Soul",
      ],
      answer: 1
    },
  ],
  [
    {
      question: "Taehyung's BT21 character Tata hails from which planet?",
      options: [
        "Planet TS",
        "Planet BT",
        "Planet Tata",
        "Planet BTS",
      ],
      answer: 1
    },
    {
      question: "Taehyung's song 'Sweet Night' is an OST from which kdrama? ",
      options: [
        "It's okay to not be okay ",
        "Vincenzo",
        "Itaewon Class",
        "True Beauty",
      ],
      answer: 2
    },
    {
      question: "What is the name of Taehyung's character in Hwarang? ",
      options: [
        "Soo-ho",
        "Seo-joon",
        "Han-sung",
        "Moo-myung",
      ],
      answer: 2
    },
    {
      question: "In Go Go Halloween dance practice video, what character did Taehyung dress up as? ",
      options: [
        "Harley Quinn",
        "Snow White",
        "Naruto",
        "Joker",
      ],
      answer: 1
    },
    {
      question: "Taehyung recently won an award for his OST Sweet night in which award show?",
      options: [
        "APAN Star awards ",
        "Melon Music Awards",
        "Soompi Awards ",
        "Mnet Asia Music Awards ",
      ],
      answer: 0
    },
  ],
  [
    {
      question: "Which of the following is NOT the name of one of Cooky's friends in BT21 universe?",
      options: [
        "Chimmy",
        "Shooky",
        "Spooky",
        "Jooky",
      ],
      answer: 2
    },
  ]
];

var color = [
  {
    r: 14,
    g: 163,
    b: 232
  },
  {
    r: 255,
    g: 87,
    b: 213
  },
  {
    r: 255,
    g: 255,
    b: 255
  },
  {
    r: 240,
    g: 14,
    b: 41
  },
  {
    r: 250,
    g: 201,
    b: 25
  },
  {
    r: 29,
    g: 181,
    b: 5
  },
  {
    r: 191,
    g: 9,
    b: 232
  },
]

var highScore = [
  [
    {
      name: "Shraddha",
      score: 18
    },
    {
      name: "Keith",
      score: 9
    }
  ],
  [
    {
      name: "Shraddha",
      score: 18
    },
    {
      name: "Keith",
      score: 9
    }
  ],
  [
    {
      name: "Shraddha",
      score: 18
    },
    {
      name: "Keith",
      score: 9
    }
  ],
  [
    {
      name: "Shraddha",
      score: 18
    },
    {
      name: "Keith",
      score: 9
    }
  ],
  [
    {
      name: "Shraddha",
      score: 18
    },
    {
      name: "Keith",
      score: 9
    }
  ],
  [
    {
      name: "Shraddha",
      score: 18
    },
    {
      name: "Keith",
      score: 9
    }
  ],
  [
    {
      name: "Shraddha",
      score: 18
    },
    {
      name: "Keith",
      score: 9
    }
  ],
];

var members = ['Kim Namjoon', 'Kim Seokjin', 'Min Yoongi', 'Jung Hoseok', 'Park Jimin', 'Kim Taehyung', 'Jeon Jungkook'];


module.exports = { questions, highScore, members, color };