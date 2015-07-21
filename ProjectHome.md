# NFL Game Stats #

Converts the NFL's XML game stats feed into a JSON data structure that is easy to work with.

## How to use ##
  1. [Download](http://code.google.com/p/nfl-game-stats/downloads/list) and add nfl\_game\_stats-2.0.1.js and day\_hours.js to your html.
```
 <script type="text/javascript" src="day_hours.js"></script>
 <script type="text/javascript" src="nfl_game_stats.js"></script>
```
  1. Make a request`*` to http://www.nfl.com/liveupdate/scorestrip/ss.xml during the regular season or http://www.nfl.com/liveupdate/scorestrip/postseason/ss.xml during the post season.
  1. Call getWeekGameStats.
```
 var weekGameStats = getWeekGameStats(this.responseText);
```
  1. Use the returned JSON [getWeekGameStats](http://code.google.com/p/nfl-game-stats/wiki/WeekGameStatsAPI) as you please.


`*`A [cross-domain request](http://en.wikipedia.org/wiki/XMLHttpRequest#Cross-domain_requests) must be made.