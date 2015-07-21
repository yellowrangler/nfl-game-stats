How to use the results returned from getWeekGameStats.

# Introduction #

Available data in results.

# Details #

**Example:**
```
var weekGameStats = getWeekGameStats(this.responseText);
var gameOneStats = weekGameStats.gameStats[0];
alert("Away team is " + gameOneStats.awayTeam);
```


### WeekGameStats Object ###
**week**
> Week of the season.
**year**
> Year games are played.
**gameStats** [GameStats object](WeekGameStatsAPI#GameStats_Object.md)
> Array of stats for all games of the week.


### GameStats Object ###
**gameDay**
> Abbreviated day of the game.
**gameTime**
> Local time the game will played in 12-hour day format.  No am/pm.
**gameStatus**
> During the game, the current quarter. Otherwise "Pregame", "Halftime, "Overtime", "Final", or "Final Overtime".
**timeInQuarter**
> Time left in the quarter in MM:SS format.
**awayTeam** [Team Object](WeekGameStatsAPI#Team_Object.md)
> Away team. String value of the team's abbreviated city name.
**awayTeamScore**
> Away team's score.
**homeTeam** [Team Object](WeekGameStatsAPI#Team_Object.md)
> > Home team. String value of the team's abbreviated city name.
**homeTeamScore**

> Home team's score.
**teamWithPossession**
> Team with possession of the ball. (Abbreviated city name)
**gameAlert**
> If goal for the team with possession has been scored; FG or TD.
> If interception occurred and now possession has changed; INT.
> If saftey; SAF.
**isInRedZone**
> Boolean if team with possession is in the red zone.
**id**
> Id unique to this game.
**gameType**
> Type of game; REG (Regular Season), WC (Wild Card), DIV (Division), CON (Conference), PRO (Pro Bowl), SB (Super Bowl).


### Team Object ###
**abbrCityname**
> Abbreviated city name.
**mascotName**
> Mascot's name.