function getNfl() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
  xhr.open("GET", "http://www.nfl.com/liveupdate/scorestrip/scorestrip.json", true);
  xhr.send();
}

function handleStateChange() {
  // If DONE
  if (this.readyState == 4) {
    // If OK
    if (this.status == 200) {
      var preProcessedResponseText = this.responseText;
      //var preProcessedResponseText = "{\"ss\":[[\"Thu\",\"8:20\",\"1\",\"07:49\",\"CHI\",\"0\",\"SF\",\"0\",\"CHI\",\"1\",\"54596\",,\"REG10\",\"2009\"],[\"Sun\",\"1:00\",\"Pregame\",,\"ATL\",,\"CAR\",,,,\"54597\",,\"REG10\",\"2009\"],[\"Thu\",\"8:20\",\"Final\",,\"CHI\",\"6\",\"SF\",\"10\",,,\"54596\",,\"REG10\",\"2009\"]]}"//this.responseText;
      //var preProcessedResponseText = "{\"ss\":[[\"Thu\",\"8:20\",\"1\",\"07:49\",\"team city mascot\",\"CHI\",\"0\",\"team city mascot\",\"SF\",\"0\",\"CHI\",\"1\",\"54596\",,\"NBC\",\"REG10\",\"2009\"],[\"Sun\",\"1:00\",\"Pregame\",,\"team city mascot\",\"ATL\",,\"team city mascot\",\"CAR\",,,,\"54597\",,\"NBC\",\"REG10\",\"2009\"],[\"Thu\",\"8:20\",\"Final\",,\"team city mascot\",\"CHI\",\"6\",\"team city mascot\",\"SF\",\"10\",,,\"54596\",,\"NBC\",\"REG10\",\"2009\"]]}"//this.responseText;
      while (preProcessedResponseText.search(/,,/) != -1) {
        preProcessedResponseText = preProcessedResponseText.replace(/,,/g, ",\"\",");
      }
      var response = JSON.parse(preProcessedResponseText);
      var stats = getGameStats(response.ss);

      var unorderedList = document.createElement("ul");
      //unorderedList.appendChild(displayGame(gameStats));
      for (var i = 0; i < stats.length; i++) {

        unorderedList.appendChild(displayGame(stats[i]));
      }
      var gamesDiv = document.getElementById("games");
      gamesDiv.appendChild(unorderedList);

    } else {
      var x = document.getElementById("start");
      x.innerHTML = 'failed';
    }
  }
}

function displayGame(gameStats) {
  var listElement = document.createElement("li");

//could create template that is not visible and pull it in, populate, and append.
  var awayTeamDiv = document.createElement("div");
  awayTeamDiv.innerText = gameStats.awayTeam + ": " + gameStats.awayTeamScore;
  var homeTeamDiv = document.createElement("div");
  homeTeamDiv.innerText = gameStats.homeTeam + ": " + gameStats.homeTeamScore;
  if (gameStats.teamWithPossession == gameStats.awayTeam) {
    awayTeamDiv.className = "has-possession";
  } else if (gameStats.teamWithPossession == gameStats.homeTeam) {
    homeTeamDiv.className = "has-possession";
  }
  var gameTimeDiv = document.createElement("div");
  var gameTime;
  if (gameStats.quarter == 'Pregame') {
    gameTime = gameStats.gameDay + ' ' + gameStats.gameTime;
  } else if (gameStats.quarter == 'Halftime' || gameStats.quarter == 'Final' || gameStats.quarter == 'final overtime' ) {
    //give quarter/final
    gameTime = gameStats.quarter
  } else {
    gameTime = 'Q' + gameStats.quarter + ' ' + gameStats.timeInQuarter;
  }
  gameTimeDiv.innerText = gameTime;

  var gameDiv = document.createElement("div");
  gameDiv.appendChild(awayTeamDiv);
  gameDiv.appendChild(homeTeamDiv);
  gameDiv.appendChild(gameTimeDiv);
  gameDiv.className = "game";
  if (gameStats.isInRedZone == 1) {
    gameDiv.className += " in-red-zone";
  }

  listElement.appendChild(gameDiv);
  return listElement;
}
