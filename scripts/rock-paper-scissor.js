//|| default operator 
let score=JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  losses:0,
  tied:0
};


let result;
function playGame(playerMove) {
  
  updateScoreElement();
  if (playerMove === "Scissor") {

    const computerMove = toFindRockPaperScissor();
    document.querySelector('.js-moves').innerHTML=`You :
<img src="/Images/${playerMove}-emoji.png" class="move-icon">
Computer : <img src="/Images/${computerMove}-emoji.png" class="move-icon">`;
     
    if (computerMove === "Rock") {
      result = "Lost";
    } else if (computerMove === "Paper") {
      result = "Won";
    } else {
      result = "Tied";
    }
  } 
  else if (playerMove === "Paper") {
    const computerMove = toFindRockPaperScissor();
    document.querySelector('.js-moves').innerHTML=`You :
<img src="/Images/${playerMove}-emoji.png" class="move-icon">
Computer : <img src="/Images/${computerMove}-emoji.png" class="move-icon">`;
  
    if (computerMove === "Rock") {
      result = "Won";
    } else if (computerMove === "Paper") {
      result = "Tied";
    } else {
      result = "Lost";
    }
  } 
  else {
    const computerMove = toFindRockPaperScissor();
    document.querySelector('.js-moves').innerHTML=`You :
<img src="/Images/${playerMove}-emoji.png" class="move-icon">
Computer : <img src="/Images/${computerMove}-emoji.png" class="move-icon">`;
  
    if (computerMove === "Rock") {
      result = "Tied";
    } else if (computerMove === "Paper") {
      result = "Lost";
    } else {
      result = "Won";
    }
  }
  document.querySelector('.js-result').innerHTML=result;
   
  if(result==='Won'){
    score.wins=score.wins+1;
  }
  else if(result==='Lost'){
    score.losses=score.losses+1;
  }
  else {
    score.tied=score.tied+1;
  }
  localStorage.setItem('score',JSON.stringify(score));
  updateScoreElement();
}         

function toFindRockPaperScissor() {
  
  const number = Math.random();
  let computerChoice;
  if (number <= 0.33) {
    computerChoice = "Rock";
  } else if (number >= 0.33 && number <= 0.66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissor";
  }
  return computerChoice;
}
updateScoreElement();
function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`wins : ${score.wins} ; losses : ${score.losses} ; drawn : ${score.tied}`;
}
