//|| default operator 
let score=JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  losses:0,
  tied:0
};
let result;
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r' || event.key==='R'){
    playGame('Rock');
  }
  else if(event.key==='p' || event.key==='P') {
    playGame('Paper');
  }
  else if(event.key==='s' || event.key==='S') {
    playGame('Scissor');
  }
  else {
  }
});

document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('Rock');
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
  playGame('Paper');
});
document.querySelector('.js-scissor-button').addEventListener('click',()=>{
  playGame('Scissor');
});
document.querySelector('.js-reset-button').addEventListener('click',()=>{
  score.wins=0;
    score.losses=0;
    score.tied=0;
    localStorage.removeItem('score');
    updateScoreElement();
});
let isAutoPlaying=false;
let intervalId;
document.querySelector('.js-autoplay-button').addEventListener('click',()=>{
  if(!isAutoPlaying) {
    intervalId=setInterval(function() {
      let playerMove=toFindRockPaperScissor();
      playGame(playerMove);
    },1000);
    isAutoPlaying=true;
    document.querySelector('.js-autoplay-button').innerHTML='Stop';
  }
  else {
    clearInterval(intervalId);
    isAutoPlaying=false;
    document.querySelector('.js-autoplay-button').innerHTML='Auto Play';
    
  }
});

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
  if(result==='Won') {
  document.querySelector('.js-result').innerHTML=`<p style="color: #00FF00";>${result}</p>`;
  }
  else if(result==='Lost') {
    document.querySelector('.js-result').innerHTML=`<p style="color:#FF0000";>${result}</p>`;
  }
  else {
    document.querySelector('.js-result').innerHTML=result;
  }
   
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

