var router = require('express').Router();
var bodyParser = require('body-parser');
const Proposal = require('../domain/analysis/Proposal');

const analysisDB = [
	{
		identification: '11102768774', date: Date(2023,4,19)
	}];

router.use(bodyParser.json());
router.get('/proposal', (req, res) => {
	res.send({message: 'API RESPONSE!!!'});
});


router.post('/proposal', (req, res) => {
	debugger;
	const value = req.body;

	var proposal = Proposal(req.body);
	
	if(proposal.isValid())
		res.send(proposal);
	else{
		res.send({ errors: proposal.notifications },400);
	}
	
});

module.exports = router;