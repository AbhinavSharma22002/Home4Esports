const Team= require("../database/Team");

const getTeams = async (req, res) => {
  try {
    const teams = await Team.find().sort({ seed: 1 });
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const generateBracket = async (req, res) => {
  try {
    const teams = await Team.find().sort({ seed: 1 });
    const bracket = [];

    //we are checking if the number of teams is even
    if (teams.length % 2 !== 0) {
      return res.status(400).json({ error: 'Number of teams must be even' });
    }

    //we are generating the first round of matches
    for (let i = 0; i < teams.length; i += 2) {
      const match = {
        home: teams[i],
        away: teams[i + 1],
      };
      bracket.push(match);
    }

    //now we are generating the rest of the bracket
    for (let roundSize = teams.length / 2; roundSize > 1; roundSize /= 2) {
      const round = [];
      for (let i = 0; i < bracket.length; i += 2) {
        const match = {
          home: {
            winner: null,
            team: null,
          },
          away: {
            winner: null,
            team: null,
          },
        };
        match.home.team = bracket[i].home;
        match.away.team = bracket[i + 1].home;
        round.push(match);

        match.home.team = bracket[i].away;
        match.away.team = bracket[i + 1].away;
        round.push(match);
      }
      bracket.length = 0;
      bracket.push(...round);
    }

    res.status(200).json(bracket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTeams, generateBracket };