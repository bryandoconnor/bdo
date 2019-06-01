// var playerHP = 45;
var zombieArr = [];
var gameLevel = "blue";

var necroArr = [
  'Necromancer',
  'Necromancer',
  'Necromancer',
  'Necromancer',
  'Necromancer',
  'Necromancer'
];

var blueArr = [
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Nothing in sight',
  'Nothing in sight',
  'Nothing in sight',
  '1 Walker',
  '1 Walker',
  '1 Walker',
  '1 Walker',
  '1 Walker',
  '1 Walker',
  '1 Walker',
  '1 Walker',
  '1 Walker',
  '1 Walker',
  '1 Walker',
  '2 Walkers',
  '2 Walkers',
  '2 Walkers',
  '2 Walkers',
  '2 Walkers',
  '3 Walkers',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '1 Runner',
  '1 Runner',
  '1 Runner',
  '1 Runner',
  '1 Runner',
  '1 Runner',
  '1 Abomination',
  '1 Abomination',
  'Zombie Activation: No one',
  'Zombie Activation: No one',
  'Zombie Activation: No one',
  'Zombie Activation: No one'
];

var yellowArr = [
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  '2 Walkers',
  '2 Walkers',
  '2 Walkers',
  '2 Walkers',
  '2 Walkers',
  '3 Walkers',
  '3 Walkers',
  '3 Walkers',
  '3 Walkers',
  '3 Walkers',
  '3 Walkers',
  '4 Walkers',
  '4 Walkers',
  '4 Walkers',
  '4 Walkers',
  '4 Walkers',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '2 Fatties',
  '2 Fatties',
  '2 Fatties',
  '1 Runner',
  '1 Runner',
  '1 Runner',
  '1 Runner',
  '1 Runner',
  '1 Runner',
  '2 Runners',
  '2 Runners',
  '2 Runners',
  '1 Abomination',
  '1 Abomination',
  'Zombie Activation: All Standard Walkers',
  'Zombie Activation: All Standard Walkers',
  'Zombie Activation: All Standard Runners',
  'Zombie Activation: All Standard Fatties'
];

var orangeArr = [
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  '3 Walkers',
  '3 Walkers',
  '4 Walkers',
  '4 Walkers',
  '4 Walkers',
  '4 Walkers',
  '4 Walkers',
  '4 Walkers',
  '5 Walkers',
  '5 Walkers',
  '5 Walkers',
  '5 Walkers',
  '5 Walkers',
  '5 Walkers',
  '6 Walkers',
  '6 Walkers',
  '1 Fatty',
  '1 Fatty',
  '1 Fatty',
  '2 Fatties',
  '2 Fatties',
  '2 Fatties',
  '3 Fatties',
  '3 Fatties',
  '3 Fatties',
  '1 Runner',
  '2 Runners',
  '2 Runners',
  '2 Runners',
  '2 Runners',
  '2 Runners',
  '2 Runners',
  '2 Runners',
  '3 Runners',
  '1 Abomination',
  '1 Abomination',
  'Zombie Activation: All Standard Walkers',
  'Zombie Activation: All Standard Walkers',
  'Zombie Activation: All Standard Runners',
  'Zombie Activation: All Standard Fatties'
];

var redArr = [
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  'Double Spawn',
  '5 Walkers',
  '5 Walkers',
  '5 Walkers',
  '5 Walkers',
  '5 Walkers',
  '5 Walkers',
  '6 Walkers',
  '6 Walkers',
  '6 Walkers',
  '6 Walkers',
  '6 Walkers',
  '6 Walkers',
  '7 Walkers',
  '7 Walkers',
  '8 Walkers',
  '8 Walkers',
  '1 Fatty',
  '2 Fatties',
  '2 Fatties',
  '2 Fatties',
  '3 Fatties',
  '3 Fatties',
  '3 Fatties',
  '3 Fatties',
  '3 Fatties',
  '3 Fatties',
  '2 Runners',
  '2 Runners',
  '2 Runners',
  '3 Runners',
  '3 Runners',
  '3 Runners',
  '3 Runners',
  '3 Runners',
  '1 Abomination',
  '1 Abomination',
  'Zombie Activation: All Standard Walkers',
  'Zombie Activation: All Standard Walkers',
  'Zombie Activation: All Standard Runners',
  'Zombie Activation: All Standard Fatties'
];

function check() {
  document.getElementById("colors").checked = true;
}

function showDice() {
  var diceInput = document.getElementById("diceInput").value;
  var dice1 = document.getElementById("d1");
  var dice2 = document.getElementById("d2");
  var dice3 = document.getElementById("d3");
  var dice4 = document.getElementById("d4");
  var dice5 = document.getElementById("d5");
  var dice6 = document.getElementById("d6");
  var dice7 = document.getElementById("d7");
  var dice8 = document.getElementById("d8");
  var dice9 = document.getElementById("d9");
  var dice10 = document.getElementById("d10");

  if(diceInput == 1) {
    dice1.style.display = "block";
    dice2.style.display = "none";
    dice3.style.display = "none";
    dice4.style.display = "none";
    dice5.style.display = "none";
    dice6.style.display = "none";
    dice7.style.display = "none";
    dice8.style.display = "none";
    dice9.style.display = "none";
    dice10.style.display = "none";
  } else if(diceInput == 2) {
    dice1.style.display = "block";
    dice2.style.display = "block";
    dice3.style.display = "none";
    dice4.style.display = "none";
    dice5.style.display = "none";
    dice6.style.display = "none";
    dice7.style.display = "none";
    dice8.style.display = "none";
    dice9.style.display = "none";
    dice10.style.display = "none";
  } else if(diceInput == 3) {
    dice1.style.display = "block";
    dice2.style.display = "block";
    dice3.style.display = "block";
    dice4.style.display = "none";
    dice5.style.display = "none";
    dice6.style.display = "none";
    dice7.style.display = "none";
    dice8.style.display = "none";
    dice9.style.display = "none";
    dice10.style.display = "none";
  } else if(diceInput == 4) {
    dice1.style.display = "block";
    dice2.style.display = "block";
    dice3.style.display = "block";
    dice4.style.display = "block";
    dice5.style.display = "none";
    dice6.style.display = "none";
    dice7.style.display = "none";
    dice8.style.display = "none";
    dice9.style.display = "none";
    dice10.style.display = "none";
  } else if(diceInput == 5) {
    dice1.style.display = "block";
    dice2.style.display = "block";
    dice3.style.display = "block";
    dice4.style.display = "block";
    dice5.style.display = "block";
    dice6.style.display = "none";
    dice7.style.display = "none";
    dice8.style.display = "none";
    dice9.style.display = "none";
    dice10.style.display = "none";
  } else if(diceInput == 6) {
    dice1.style.display = "block";
    dice2.style.display = "block";
    dice3.style.display = "block";
    dice4.style.display = "block";
    dice5.style.display = "block";
    dice6.style.display = "block";
    dice7.style.display = "none";
    dice8.style.display = "none";
    dice9.style.display = "none";
    dice10.style.display = "none";
  } else if(diceInput == 7) {
    dice1.style.display = "block";
    dice2.style.display = "block";
    dice3.style.display = "block";
    dice4.style.display = "block";
    dice5.style.display = "block";
    dice6.style.display = "block";
    dice7.style.display = "block";
    dice8.style.display = "none";
    dice9.style.display = "none";
    dice10.style.display = "none";
  } else if(diceInput == 8) {
    dice1.style.display = "block";
    dice2.style.display = "block";
    dice3.style.display = "block";
    dice4.style.display = "block";
    dice5.style.display = "block";
    dice6.style.display = "block";
    dice7.style.display = "block";
    dice8.style.display = "block";
    dice9.style.display = "none";
    dice10.style.display = "none";
  } else if(diceInput == 9) {
    dice1.style.display = "block";
    dice2.style.display = "block";
    dice3.style.display = "block";
    dice4.style.display = "block";
    dice5.style.display = "block";
    dice6.style.display = "block";
    dice7.style.display = "block";
    dice8.style.display = "block";
    dice9.style.display = "block";
    dice10.style.display = "none";
  } else if(diceInput == 10) {
    dice1.style.display = "block";
    dice2.style.display = "block";
    dice3.style.display = "block";
    dice4.style.display = "block";
    dice5.style.display = "block";
    dice6.style.display = "block";
    dice7.style.display = "block";
    dice8.style.display = "block";
    dice9.style.display = "block";
    dice10.style.display = "block";
  } else {
    dice1.style.display = "none";
    dice2.style.display = "none";
    dice3.style.display = "none";
    dice4.style.display = "none";
    dice5.style.display = "none";
    dice6.style.display = "none";
    dice7.style.display = "none";
    dice8.style.display = "none";
    dice9.style.display = "none";
    dice10.style.display = "none";
  }
}

function rollDice() {
  var roll1 = Math.floor(Math.random() * 6) + 1;
  var roll2 = Math.floor(Math.random() * 6) + 1;
  var roll3 = Math.floor(Math.random() * 6) + 1;
  var roll4 = Math.floor(Math.random() * 6) + 1;
  var roll5 = Math.floor(Math.random() * 6) + 1;
  var roll6 = Math.floor(Math.random() * 6) + 1;
  var roll7 = Math.floor(Math.random() * 6) + 1;
  var roll8 = Math.floor(Math.random() * 6) + 1;
  var roll9 = Math.floor(Math.random() * 6) + 1;
  var roll10 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("numDice1").value = roll1;
  document.getElementById("numDice2").value = roll2;
  document.getElementById("numDice3").value = roll3;
  document.getElementById("numDice4").value = roll4;
  document.getElementById("numDice5").value = roll5;
  document.getElementById("numDice6").value = roll6;
  document.getElementById("numDice7").value = roll7;
  document.getElementById("numDice8").value = roll8;
  document.getElementById("numDice9").value = roll9;
  document.getElementById("numDice10").value = roll10;
}

function showSpawns() {
  if(document.getElementById("spawnCheck1").checked != false) {
    document.getElementById("spawnPoint1").style.display = "block";
  } else {
    document.getElementById("spawnPoint1").style.display = "none";
  }
  if(document.getElementById("spawnCheck2").checked != false) {
    document.getElementById("spawnPoint2").style.display = "block";
  } else {
    document.getElementById("spawnPoint2").style.display = "none";
  }
  if(document.getElementById("spawnCheck3").checked != false) {
    document.getElementById("spawnPoint3").style.display = "block";
  } else {
    document.getElementById("spawnPoint3").style.display = "none";
  }
  if(document.getElementById("spawnCheck4").checked != false) {
    document.getElementById("spawnPoint4").style.display = "block";
  } else {
    document.getElementById("spawnPoint4").style.display = "none";
  }
  if(document.getElementById("spawnCheck5").checked != false) {
    document.getElementById("spawnPoint5").style.display = "block";
  } else {
    document.getElementById("spawnPoint5").style.display = "none";
  }
  if(document.getElementById("spawnCheck6").checked != false) {
    document.getElementById("spawnPoint6").style.display = "block";
  } else {
    document.getElementById("spawnPoint6").style.display = "none";
  }
}

$('img').click(function(){
   $('.selected').removeClass('selected'); // removes the previous selected image class
   $(this).addClass('selected'); // adds the class to the clicked image
});

function checkHP() {
  var playerValues = [];
  playerValues.push(clovisHP.value);
  playerValues.push(annHP.value);
  playerValues.push(baldricHP.value);
  playerValues.push(silasHP.value);
  playerValues.push(nellyHP.value);
  playerValues.push(samsonHP.value);

  for (let i in playerValues) {
    if(playerValues[i] >= 0 && playerValues[i] <= 6) {
      if(gameLevel != "yellow" && gameLevel != "orange" && gameLevel != "red") {
        gameLevel = "blue";
        document.getElementsByClassName("hp")[i].style.backgroundColor = gameLevel;
      }
    } else if(playerValues[i] >= 7 && playerValues[i] <= 25) {
      if(gameLevel != "orange" && gameLevel != "red") {
        gameLevel = "yellow";
        document.getElementsByClassName("hp")[i].style.backgroundColor = gameLevel;
      }
    } else if(playerValues[i] >= 26 && playerValues[i] <= 40) {
      if(gameLevel != "red") {
        gameLevel = "orange";
        document.getElementsByClassName("hp")[i].style.backgroundColor = gameLevel;
      }
    } else if(playerValues[i] >= 41 && playerValues[i] <= 44) {
      gameLevel = "red";
      document.getElementsByClassName("hp")[i].style.backgroundColor = gameLevel;
    } else if(playerValues[i] >= 45) {
      gameLevel = "blue";
      document.getElementsByClassName("hp")[i].style.backgroundColor = gameLevel;
    }
  }
  return gameLevel;
}

function spawnZombies() {
  var randomCard1 = Math.floor(Math.random() * 54);
  var randomCard2 = Math.floor(Math.random() * 54);
  var randomCard3 = Math.floor(Math.random() * 54);
  var randomCard4 = Math.floor(Math.random() * 54);
  var randomCard5 = Math.floor(Math.random() * 54);
  var randomCard6 = Math.floor(Math.random() * 54);
  checkHP();

  this.zombieArr.push(...necroArr);

  if(gameLevel == 'blue') {
    this.zombieArr.push(...blueArr);
  } else if(gameLevel == 'yellow') {
    this.zombieArr.push(...yellowArr);
  } else if(gameLevel == 'orange') {
    this.zombieArr.push(...orangeArr);
  } else if(gameLevel == 'red') {
    this.zombieArr.push(...redArr);
  }

  document.getElementById("spawnPoint1").innerHTML = this.zombieArr[randomCard1];
  document.getElementById("spawnPoint2").innerHTML = this.zombieArr[randomCard2];
  document.getElementById("spawnPoint3").innerHTML = this.zombieArr[randomCard3];
  document.getElementById("spawnPoint4").innerHTML = this.zombieArr[randomCard4];
  document.getElementById("spawnPoint5").innerHTML = this.zombieArr[randomCard5];
  document.getElementById("spawnPoint6").innerHTML = this.zombieArr[randomCard6];
  showSpawns();
  this.zombieArr.splice(0, 54);
}

showDice();
