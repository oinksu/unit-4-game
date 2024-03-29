//variables and stuff
var randomNumber;
var arrCrystalValues;
var winCounter = 0;
var lossCounter = 0;
var gameActive = false;

var arrCrystals = ["assets/images/crystal1.jpg", "assets/images/crystal0.jpg", "assets/images/crystal2.jpg" ,"assets/images/crystal3.jpg"];

// Start 
function setGame() {
  gameActive = true;
  randomNumber = generateRandomNumber();
  $("#randomNumber").text(randomNumber);
  $("#winDisplay").text(winCounter);
  $("#lossDisplay").text(lossCounter);
  $("#totalDisplay").text(0);
  $("#messageDisplay").empty();
  arrCrystalValues = generateRandomArray();
  setCrystals(arrCrystalValues);
}


function generateRandomArray() {
  
  // Random 1 to 12
  var arrNum = [];
  for (var i = 0; i < arrCrystals.length; i++) {
    arrNum.push(Math.floor(Math.random() * 12 + 1));
  }

  // Console log crystal values

  

  for (var i = 0; i < arrNum.length; i++) {
    console.log("crystal value " + (i + 1) + " : " + arrNum[i]);
  }
  return arrNum;
}

function generateRandomNumber() {
  
  // Random 19 to 120
  return Math.floor(Math.random() * 120 + 19);
}

function setCrystals(arrCrystalValues) {
  $("#crystals").empty();
  for (var i = 0; i < arrCrystals.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("img img-thumnail crystal-image");
    imageCrystal.attr("src", arrCrystals[i]);
    imageCrystal.attr("data-crystalvalue", arrCrystalValues[i]);
    $("#crystals").append(imageCrystal);
  }
}

function setTotalDisplay(dataVal) {
  var total = parseInt($("#totalDisplay").text()) + parseInt(dataVal);
  $("#totalDisplay").text(total);
  if (total >= randomNumber) {
    if (total > randomNumber) {
      
      
      // Loze
      $("#messageDisplay").text("You are Lozer face !");
      lossCounter++;
      $("#lossDisplay").text(lossCounter);
    } else {
      
      
      // Win
      $("#messageDisplay").text("You Winz ze power of math !");
      winCounter++;
      $("#winDisplay").text(winCounter);
    }
    
    // add button
    var $btn = $("<button>");
    $btn.addClass("play-button");
    $btn.attr("id", "play");
    $btn.text("Play Again");
    $("#messageDisplay").append($btn);

    gameActive=false;
  }
}

// End Of Functions

$(document).ready(function () {
  setGame();

  $("#crystals").on("click", ".crystal-image", function () {
    if(gameActive){
      setTotalDisplay($(this).attr("data-crystalvalue"));
    }else{
      alert("Press the Play Again button.");
      return false;
    }
  });


  $("#messageDisplay").on("click", "#play", function () {
    setGame();
  });

});