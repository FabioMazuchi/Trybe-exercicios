const {readFile, writeFile} = require('../helpers/readWriteFile.js');
const { authTeamsName, authTeamsInitials, authTeamsCountry,  } = require('../middlewares/authTeams');

const router = require('express').Router();
const PATH = './team.json';

router.get('/', async (req, res) => {
	const teams = await readFile(PATH) || [];
	console.log(teams);

	res.status(200).json(teams)
});

router.post('/', authTeamsName, authTeamsInitials, authTeamsCountry, async (req, res) => {
	const teamNew = { ...req.body };
	
	await writeFile(PATH, teamNew);
	
	res.status(201).json(teamNew);
});

module.exports = router;