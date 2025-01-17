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
        document.querySelector("#circleOne").classList.remove("hidden");
        document.querySelector("#circleTwo").classList.remove("hidden");
        document.querySelector("#circleThree").classList.remove("hidden");
        document.querySelector("#circleFour").classList.remove("hidden");
        document.querySelector("#circleFive").classList.add("hidden");
        document.querySelector("#circleSix").classList.remove("hidden");
        document.querySelector("#circleSeven").classList.remove("hidden");
        document.querySelector("#circleEight").classList.remove("hidden");
        document.querySelector("#circleNine").classList.remove("hidden");
    } else if(rnd === 2) {
        document.querySelector("#circleOne").classList.add("hidden");
        document.querySelector("#circleTwo").classList.remove("hidden");
        document.querySelector("#circleThree").classList.remove("hidden");
        document.querySelector("#circleFour").classList.remove("hidden");
        document.querySelector("#circleFive").classList.remove("hidden");
        document.querySelector("#circleSix").classList.remove("hidden");
        document.querySelector("#circleSeven").classList.remove("hidden");
        document.querySelector("#circleEight").classList.remove("hidden");
        document.querySelector("#circleNine").classList.add("hidden");
    } else if(rnd === 3) {
        document.querySelector("#circleOne").classList.add("hidden");
        document.querySelector("#circleTwo").classList.remove("hidden");
        document.querySelector("#circleThree").classList.remove("hidden");
        document.querySelector("#circleFour").classList.remove("hidden");
        document.querySelector("#circleFive").classList.add("hidden");
        document.querySelector("#circleSix").classList.remove("hidden");
        document.querySelector("#circleSeven").classList.remove("hidden");
        document.querySelector("#circleEight").classList.remove("hidden");
        document.querySelector("#circleNine").classList.add("hidden");
    } else if(rnd === 4) {
        document.querySelector("#circleOne").classList.add("hidden");
        document.querySelector("#circleTwo").classList.remove("hidden");
        document.querySelector("#circleThree").classList.add("hidden");
        document.querySelector("#circleFour").classList.remove("hidden");
        document.querySelector("#circleFive").classList.remove("hidden");
        document.querySelector("#circleSix").classList.remove("hidden");
        document.querySelector("#circleSeven").classList.add("hidden");
        document.querySelector("#circleEight").classList.remove("hidden");
        document.querySelector("#circleNine").classList.add("hidden");
    } else if(rnd === 5) {
        document.querySelector("#circleOne").classList.add("hidden");
        document.querySelector("#circleTwo").classList.remove("hidden");
        document.querySelector("#circleThree").classList.add("hidden");
        document.querySelector("#circleFour").classList.remove("hidden");
        document.querySelector("#circleFive").classList.add("hidden");
        document.querySelector("#circleSix").classList.remove("hidden");
        document.querySelector("#circleSeven").classList.add("hidden");
        document.querySelector("#circleEight").classList.remove("hidden");
        document.querySelector("#circleNine").classList.add("hidden");
    } else {
        document.querySelector("#circleOne").classList.add("hidden");
        document.querySelector("#circleTwo").classList.add("hidden");
        document.querySelector("#circleThree").classList.add("hidden");
        document.querySelector("#circleFour").classList.remove("hidden");
        document.querySelector("#circleFive").classList.remove("hidden");
        document.querySelector("#circleSix").classList.remove("hidden");
        document.querySelector("#circleSeven").classList.add("hidden");
        document.querySelector("#circleEight").classList.add("hidden");
        document.querySelector("#circleNine").classList.add("hidden");
    }
    return rnd
}


function randomCube2() {
    let rnd = random();
    if(rnd === 1) {
        document.querySelector("#circleOne1").classList.remove("hidden");
        document.querySelector("#circleTwo2").classList.remove("hidden");
        document.querySelector("#circleThree3").classList.remove("hidden");
        document.querySelector("#circleFour4").classList.remove("hidden");
        document.querySelector("#circleFive5").classList.add("hidden");
        document.querySelector("#circleSix6").classList.remove("hidden");
        document.querySelector("#circleSeven7").classList.remove("hidden");
        document.querySelector("#circleEight8").classList.remove("hidden");
        document.querySelector("#circleNine9").classList.remove("hidden");
    } else if(rnd === 2) {
        document.querySelector("#circleOne1").classList.add("hidden");
        document.querySelector("#circleTwo2").classList.remove("hidden");
        document.querySelector("#circleThree3").classList.remove("hidden");
        document.querySelector("#circleFour4").classList.remove("hidden");
        document.querySelector("#circleFive5").classList.remove("hidden");
        document.querySelector("#circleSix6").classList.remove("hidden");
        document.querySelector("#circleSeven7").classList.remove("hidden");
        document.querySelector("#circleEight8").classList.remove("hidden");
        document.querySelector("#circleNine9").classList.add("hidden");
    } else if(rnd === 3) {
        document.querySelector("#circleOne1").classList.add("hidden");
        document.querySelector("#circleTwo2").classList.remove("hidden");
        document.querySelector("#circleThree3").classList.remove("hidden");
        document.querySelector("#circleFour4").classList.remove("hidden");
        document.querySelector("#circleFive5").classList.add("hidden");
        document.querySelector("#circleSix6").classList.remove("hidden");
        document.querySelector("#circleSeven7").classList.remove("hidden");
        document.querySelector("#circleEight8").classList.remove("hidden");
        document.querySelector("#circleNine9").classList.add("hidden");
    } else if(rnd === 4) {
        document.querySelector("#circleOne1").classList.add("hidden");
        document.querySelector("#circleTwo2").classList.remove("hidden");
        document.querySelector("#circleThree3").classList.add("hidden");
        document.querySelector("#circleFour4").classList.remove("hidden");
        document.querySelector("#circleFive5").classList.remove("hidden");
        document.querySelector("#circleSix6").classList.remove("hidden");
        document.querySelector("#circleSeven7").classList.add("hidden");
        document.querySelector("#circleEight8").classList.remove("hidden");
        document.querySelector("#circleNine9").classList.add("hidden");
    } else if(rnd === 5) {
        document.querySelector("#circleOne1").classList.add("hidden");
        document.querySelector("#circleTwo2").classList.remove("hidden");
        document.querySelector("#circleThree3").classList.add("hidden");
        document.querySelector("#circleFour4").classList.remove("hidden");
        document.querySelector("#circleFive5").classList.add("hidden");
        document.querySelector("#circleSix6").classList.remove("hidden");
        document.querySelector("#circleSeven7").classList.add("hidden");
        document.querySelector("#circleEight8").classList.remove("hidden");
        document.querySelector("#circleNine9").classList.add("hidden");
    } else {
        document.querySelector("#circleOne1").classList.add("hidden");
        document.querySelector("#circleTwo2").classList.add("hidden");
        document.querySelector("#circleThree3").classList.add("hidden");
        document.querySelector("#circleFour4").classList.remove("hidden");
        document.querySelector("#circleFive5").classList.remove("hidden");
        document.querySelector("#circleSix6").classList.remove("hidden");
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
        document.querySelector(".playerOne").classList.add("newColor");
        document.querySelector(".playerTwo").classList.remove("newColor");
    } else if(one < two) {
        document.querySelector(".winners").innerHTML = winL[1];
        document.querySelector(".playerTwo").classList.add("newColor");
        document.querySelector(".playerOne").classList.remove("newColor");
    } else {
        document.querySelector(".winners").innerHTML = winL[2];
        document.querySelector(".playerOne").classList.add("newColor");
        document.querySelector(".playerTwo").classList.add("newColor")
    }
}

// winner(randomCube1(), randomCube2());

function clickButton() {
    document.querySelector(".button").addEventListener("click", () => {
        winner(randomCube1(), randomCube2())
    })
}

clickButton()

