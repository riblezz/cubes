function random() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum
}


// document.querySelector("#circleOne").classList.add("hidden");
// document.querySelector("#circleTwo").classList.add("hidden");
// document.querySelector("#circleThree").classList.add("hidden");
// document.querySelector("#circleFour").classList.add("hidden");
// document.querySelector("#circleFive").classList.add("hidden");
// document.querySelector("#circleSix").classList.add("hidden");
// document.querySelector("#circleSeven").classList.add("hidden");
// document.querySelector("#circleEight").classList.add("hidden");
// document.querySelector("#circleNine").classList.add("hidden");

function randomCube1() {
    let rnd = random();
    if(rnd === 1) {
        document.querySelector("#circleFive").classList.add("hidden");
    } else if(rnd === 2) {
        document.querySelector("#circleOne").classList.add("hidden");
        document.querySelector("#circleNine").classList.add("hidden");
    } else if(rnd === 3) {
        document.querySelector("#circleOne").classList.add("hidden");
        document.querySelector("#circleFive").classList.add("hidden");
        document.querySelector("#circleNine").classList.add("hidden");
    } else if(rnd === 4) {
        document.querySelector("#circleOne").classList.add("hidden");
        document.querySelector("#circleThree").classList.add("hidden");
        document.querySelector("#circleSeven").classList.add("hidden");
        document.querySelector("#circleNine").classList.add("hidden");
    } else if(rnd === 5) {
        document.querySelector("#circleOne").classList.add("hidden");
        document.querySelector("#circleThree").classList.add("hidden");
        document.querySelector("#circleFive").classList.add("hidden");
        document.querySelector("#circleSeven").classList.add("hidden");
        document.querySelector("#circleNine").classList.add("hidden");
    } else {
        document.querySelector("#circleOne").classList.add("hidden");
        document.querySelector("#circleTwo").classList.add("hidden");
        document.querySelector("#circleThree").classList.add("hidden");
        document.querySelector("#circleSeven").classList.add("hidden");
        document.querySelector("#circleEight").classList.add("hidden");
        document.querySelector("#circleNine").classList.add("hidden");
    }
    return rnd
}


function randomCube2() {
    let rnd = random();
    if(rnd === 1) {
        document.querySelector("#circleFive5").classList.add("hidden");
    } else if(rnd === 2) {
        document.querySelector("#circleOne1").classList.add("hidden");
        document.querySelector("#circleNine9").classList.add("hidden");
    } else if(rnd === 3) {
        document.querySelector("#circleOne1").classList.add("hidden");
        document.querySelector("#circleFive5").classList.add("hidden");
        document.querySelector("#circleNine9").classList.add("hidden");
    } else if(rnd === 4) {
        document.querySelector("#circleOne1").classList.add("hidden");
        document.querySelector("#circleThree3").classList.add("hidden");
        document.querySelector("#circleSeven7").classList.add("hidden");
        document.querySelector("#circleNine9").classList.add("hidden");
    } else if(rnd === 5) {
        document.querySelector("#circleOne1").classList.add("hidden");
        document.querySelector("#circleThree3").classList.add("hidden");
        document.querySelector("#circleFive5").classList.add("hidden");
        document.querySelector("#circleSeven7").classList.add("hidden");
        document.querySelector("#circleNine9").classList.add("hidden");
    } else {
        document.querySelector("#circleOne1").classList.add("hidden");
        document.querySelector("#circleTwo2").classList.add("hidden");
        document.querySelector("#circleThree3").classList.add("hidden");
        document.querySelector("#circleSeven7").classList.add("hidden");
        document.querySelector("#circleEight8").classList.add("hidden");
        document.querySelector("#circleNine9").classList.add("hidden");
    }
    return rnd
}

var winL = ["1 игрок выиграл!", "2 игрок выиграл!", "Ничья!"]

// const one = randomCube1();
// const two = randomCube2();

function winner(one, two) {
    if(one > two) {
        document.querySelector(".winners").innerHTML = winL[0];
    } else if(one < two) {
        document.querySelector(".winners").innerHTML = winL[1];
    } else {
        document.querySelector(".winners").innerHTML = winL[2];
    }
}

winner(randomCube1(), randomCube2());





