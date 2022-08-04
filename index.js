var readlineSync = require('readline-sync');


let count = 0;


var questionArray = [
  {
  question: "Phoebe has a twin sister. What's her name? ",
  answer: "Ursula"
},
{
  question: "What's the name of the coffee shop used by the characters? ",
  answer: "Central Perk"
},
{
  question: "Ross is allergic to which kind of fruit? ",
  answer: "Kiwi"
},
{
  question: "Phoebe dated a scientist called David. In which Belarus city did he work? ",
  answer: "Minsk"
},
{
  question: "What is the name of Joey’s acting agent? ",
  answer: "Estelle"
},
{
  question: "What's the name of the grumpy person who works at the coffee shop? ",
  answer: "Gunther"
},
{
  question: "Which Friends character plays Dr. Drake Ramoray on the show Days Of Our Lives? ",
  answer: "Joey"
},
{
  question: "What song is Phoebe best known for? ",
  answer: "Smelly cat"
},
{
  question: "Who was Monica’s first kiss? ",
  answer: "Ross"
},
{
  question: "What was the name of the millionaire Monica dated? ",
  answer: "Pete"
}]


questionArray.map((que)=>{
  game(que.question, que.answer)
})

function game(ques, ans){
  var userAns = readlineSync.question(ques);
  if(userAns.toLowerCase() === ans.toLowerCase()){
    count += 1;
    console.log("You are right!")
    console.log("Your current score is: ",count);
    console.log("----------------------")
  } else {
    console.log("You are wrong!")
    console.log("Your current score is: ",count);
    console.log("----------------------")
  }
}

const scores = [{
  name: "Smita",
  score: 10
},
{
  name: "Shwe",
  score: 9
} ,
{
  name: "Madhu",
  score: 7
} ]
console.log("\n")
console.log("Your total score is: " , count);
console.log("\n")
console.log("Top 3 High scores are: ")
scores.map((s)=>{
  console.log(s.name + ": "+ s.score)
})
console.log("\n")
console.log("If you have beaten the top scores, do send the screenshot to smita267t@gmail.com")
