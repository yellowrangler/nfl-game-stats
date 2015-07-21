How to use the results returned from getGameStats.

# Introduction #

Available data in results.

# Details #

**Example:**
```
var stats = getGameStats(response.ss);
var gameOne = stats[0];
alert("Away team is " + gameOne.awayTeam);
```

**gameDay**
> Abbreviated day of the game.
**gameTime**
> Local time the game will played in 12-hour day format.  No am/pm.
**quarter**
> During the game, the current quarter. Otherwise "Pregame", "Halftime, "Final", or "final overtime".
**timeInQuarter**
> Time left in the quarter.
**awayTeam**
> Away team (Team object). String value of the team's abbreviated city name.
**awayTeamScore**
> Away team's score.
**homeTeam**
> > Home team (Team object). String value of the team's abbreviated city name.
**homeTeamScore**

> Home team's score.
**teamWithPossession**
> Team with possession of the ball. (Abbreviated city name)
**isInRedZone**
> Boolean if team with possession is in the red zone.
**id**
> Id unique to this game.
**gameType**
> Type of game being played.  REG15 = 15th week of the regular season.
**gameYear**
> Year the game is being played on.

### Team Object ###
**team.abbrCityname**
> Abbreviated city name.
**team.mascotName()**
> Mascot's name.