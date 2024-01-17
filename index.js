
function rollDice(){
    var randomNumber = Math.floor(Math.random() * 6);
    
    var diceVersion = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

    return diceVersion[randomNumber];
}

var dice1 = rollDice();
var dice2 = rollDice();

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if(dice1 > dice2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else if(dice2 > dice1){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}else{
    document.querySelector("h1").textContent = "Draw!";
}
