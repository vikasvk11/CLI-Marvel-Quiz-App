var readlineSync = require("readline-sync");
const chalk = require('chalk')
const error = chalk.bold.redBright;
const right = chalk.bold.green;

var k = 0;
var score = 0;
var userName = readlineSync.question("Hey, Hope you're staying positive and testing negative. \nWhat's your name?\n")

console.log("\nWelcome " + chalk.bold.yellow('%s'), userName.toUpperCase() + ",")
console.log("to the")
console.log(chalk.bold.bgRedBright("MARVEL"))
console.log("quiz. \nLet's see what you've got!\n__________")

var allScores = [{
  name: "Vikas",
  score: 6
}, {
  name: "Akshay",
  score: 8
}]

function qaf(question, answer, frameworks) {
  index = readlineSync.keyInSelect(frameworks, question, {cancel: false});
  console.log('\nYou chose ' + frameworks[index]);
  if (frameworks[index] === answer ){
    console.log("Great!," + right(' Right') + " answer.");
    score = score + 1;
  } else {
    console.log("Tough Luck! It's" + error(' Wrong'));
  }
console.log("-------------");
}

var questions = [{
  question: "Who is the founder of Marvel Comics? ",
  answer: "Martin Goodman",
  frameworks: ['StanLee', 'Martin Goodman', 'Steve Ditko', 'Jack Kirby'],
}, {
  question: "Who voiced Gwen Stacy in SpiderMan: Into the Spider-Verse? ",
  answer: "Hailee Steinfeld",
  frameworks: ['Demi Lovato', 'Cardi', 'Halsey', 'Hailee Steinfeld'],
}, {
  question: "Which is the highest grossing Marvel Movie till date? ",
  answer: "Avengers: Endgame",
  frameworks: ['Avengers: Endgame', 'Avengers: Infinity War', 'Avengers: Age of Ultron', 'Black Panther'],
}, {
  question: "Who was the antagonist in Captain America: Civil War? ",
  answer: "Helmut Zemo",
  frameworks: ['Lex Luthor', 'Helmut Zemo', 'Red Skull', 'Bucky'],
}, {
  question: "Which Metal is Black Panther's suit made of? ",
  answer: "Vibranium",
  frameworks: ['Adamantium', 'Vibranium', 'Tellerium', 'Mild Steel'],
}, {
  question: "Who was guarding the Soul Stone in Avengers: Endgame? ",
  answer: "Red Skull",
  frameworks: ['Maroon Skull', 'White Skull', 'Red Skull', 'Dark Red Skull'],
}, {
  question: "First ever Marvel Movie by Marvel Entertainment?",
  answer: "Iron Man",
  frameworks: ['Iron Man', 'Captain America', 'Batman', 'Thor'],
}, {
  question: "Who owns the rights to the Character: Spiderman?",
  answer: "Sony",
  frameworks: ['Marvel', 'Disney', 'Sony', 'Fox'],
}, {
  question: "Also, who is the creator of Spiderman?",
  answer: "StanLee & Steve Ditko",
  frameworks: ['StanLee', 'Steve Ditko', 'StanLee & Steve Ditko', 'Unknown to humanity yet'],
}, {
  question: "Thor's hammer is called....",
  answer: "Mjolnir",
  frameworks: ['Mojlnir', 'Mjolnir', 'Mjholnir', 'Mjolneir'],
}]

for (var i=0; i<questions.length; i++) {
  qaf(questions[i].question, questions[i].answer, questions[i].frameworks)
}

for(var j=0; j<allScores.length; j++){
  if (score > allScores[j].score) {
    k++;
    }
} 
if (k === allScores.length) {
  console.log("Congratulations! You've beaten the High Score.\nKindly send a screenshot of your score for updating the Leaderboard");
}

console.log("\nYour final score is " + score);

console.log("\nAll hail " + chalk.bold.bgRedBright("MARVEL"));