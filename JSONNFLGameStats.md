# JSON NFL Game Stats #

Converts the NFL's JSON game stats into a data structure that is easy to work with.

## How to use ##
  1. [Download](http://code.google.com/p/nfl-game-stats/downloads/list) and add nfl\_game\_stats-1.1.js and day\_hours.js to your html
```
 <script type="text/javascript" src="day_hours.js"></script>
 <script type="text/javascript" src="nfl_game_stats.js"></script>
```
  1. Make a request to http://www.nfl.com/liveupdate/scorestrip/scorestrip.json during the regular season or http://www.nfl.com/liveupdate/scorestrip/postseason/scorestrip.json during the post season.
  1. Find empty elements and replace with quotes ("")
```
 while (preProcessedResponseText.search(/,,/) != -1) {
   preProcessedResponseText = preProcessedResponseText.replace(/,,/g, ",\"\",");
 }
```
  1. Parse the response and call getGameStats
```
 var response = JSON.parse(preProcessedResponseText);
 var stats = getGameStats(response.ss);
```
  1. Use the returned array of [game stats](http://code.google.com/p/nfl-game-stats/wiki/GameStatsAPI) as you please.