$(document).ready(function () {

  console.log("start");

  // ------------- variables for crystals -------------

  var crystal = {
    blue:
    {
      name: "Blue-heart",
      value: 0
    },
    pink:
    {
      name: "Pink-heart",
      value: 0
    },
    red:
    {
      name: "Red-heart",
      value: 0
    },
    rainbow:
    {
      name: "Rainbow-heart",
      value: 0
    }
  };

  // --------scores -----------
  var currentScore = 0;
  var magicNumber = 0;
  // --------- wins & losses ---------

  var wins = 0;
  var losses = 0;

  // ---------------- functions ---------------
  var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // -------- starts game --------------------

  var startGame = function () {

    $("#losses").text(losses);
    $("#wins").text(wins);

    // --------- reset score -------------
    currentScore = 0;

    // --------------- sets new magic number ( between 19 - 120 ) -----------------
    magicNumber = getRandom(19, 120);
    $("#magic-number").text(magicNumber);

    // ------------------set different values (between 1 - 12 ) to each crystal -----------

    crystal.blue.value = getRandom(1, 12);
    crystal.pink.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.rainbow.value = getRandom(1, 12);

    // -------------- html to show changes ------------------

    $("#your-score").text(currentScore);
    $("#magic-number").text(magicNumber);

  }

  // --------- check to see if player won or lose & then reset game ----------

  var checkWin = function () {

    // -------- if current score is larger than magic number -----------

    if (currentScore > magicNumber) {
      alert("You Lose");

      //--------- add to loss tracker -------------------------

      losses++;
      console.log(losses)

      //  --------- reflect loss on html ----------------

      $("#losses").text(losses);

      // --------------- start game again ------------------

      startGame();

    }

    else if (currentScore === magicNumber) {
      alert("You Won");

      // ------------ add to win tracker ---------------
      wins++;

      // -------------- reflect win on html -----------
      $("#wins").text(wins);

      // -------------  start game again -------------------
      startGame();

    }

  };

  // ----------- add values for clicks on crystals ------------

  var addValues = function (clickedCrystal) {

    // ----------- change score -------------------------

    currentScore += clickedCrystal.value;

    // ----------------- reflect changes to html -----------------------

    $("#your-score").text(currentScore);

    // ---------- check to see if won -------------------------

    checkWin();

  };

  // ------------------ start game ---------------

  startGame();



  $("#blue").click(function () {
    console.log("hit blue")
    addValues(crystal.blue);

  });

  $("#pink").click(function () {
    addValues(crystal.pink);

  });

  $("#red").click(function () {
    addValues(crystal.red);

  });

  $("#rainbow").click(function () {
    addValues(crystal.rainbow);

  });

});


// // --------on-click for crystal images ----------
// $(".crystal-image").on("click", function() {

// // ------- alert triggered for button click ------
// alert("You clicked a crystal!");

// // ---------------- targetNumber-----------------

// var targetNumber = 50; 

// // --------"magic number" header to matach targetNumber -----------

// $("#Magic-Number").text(targetNumber);

// // --------tracker for player's total -------------

// var tracker = 0;

// $(".crystal-image").on("click", function() {

// // // ------- when player clicks crystal tracker goes up by 1 ----------

// tracker += 1; 

// // //  ------- alert number of times crystal clicked -------------

// alert("crystal clicked" + tracker + "times");

// // ----------- increase tracker by 10 each time --------------

// tracker += 10;

// // ---------- new tracker count when crystal is clicked ----------

// alert("new score is:" + tracker);

// // -------- checking if tracker wil match the target number ----------

// if (tracker === targetNumber) {

//   alert("You won");
// }

// // ---------- if tracker goes over the target number ---------

// else if (counter>= targetNumber){

//   alert("You Lost");
