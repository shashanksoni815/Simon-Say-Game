let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2"); 

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started == true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 1000);
}

function levelUp() {
    level++;
    h2.innerText= `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns(randIdx);
    let randBin = document.querySelector(`.${randColor}`)
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBin);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBin);
}

function checkAns() {
    console.log("curr level : ", level);
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}