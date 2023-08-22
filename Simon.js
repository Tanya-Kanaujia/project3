let gameSeq = [];
let userSeq = [];
let btns = ["yellow","green","purple","red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
// let btn = document.querySelector(".btn");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game Started!");
        started = true;
        levelUp();
    }
    
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250)
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250)
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx) {
    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]) {
       if(userSeq.length == gameSeq.length) {
        setTimeout(levelUp, 1000);
       }
    } else {
      
      h2.innerHTML = `Game Over Your Score was ${level} <br> ! Press any key to Start`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white";
      },150);
    //   let h3 = document.querySelector("h3");
    //   let score =  level;
    //   let highscore;
    //   if(score < highscore)  {
    //     h3.innerText = `Your High Score : ${highscore}` ;
    //   }
      reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}



