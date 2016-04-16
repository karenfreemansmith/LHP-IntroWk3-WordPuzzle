//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly


$("#makePuzzle").submit(function(event) {
  var puzzleText=$("#startPhrase").val().split("");

  for(i=0; i<=puzzleText.length; i++) {
    
    if(puzzleText[i] === "a") {
      puzzleText[i] = "-";
    } else if(puzzleText[i] === "e") {
      puzzleText[i] = "-";
    } else if(puzzleText[i] === "i") {
      puzzleText[i] = "-";
    } else if(puzzleText[i] === "o") {
      puzzleText[i] = "-";
    } else if(puzzleText[i] === "u") {
      puzzleText[i] = "-";
    }
  }
  puzzleText=puzzleText.join("");

  $("#makePuzzle").hide();
  $("#showPuzzle").text(puzzleText);
  $("#showPuzzle").show();
  event.preventDefault();
});
