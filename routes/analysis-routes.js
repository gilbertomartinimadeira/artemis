var router = require('express').Router();
var bodyParser = require('body-parser');
const Proposal = require('../domain/analysis/Proposal');

const analysisDB = [
	{
		identification: '11102768774', date: Date(2023,4,19)
	}];

router.use(bodyParser.json());

router.post('/proposal', (req,res) => {

	var proposal = Proposal('11102768774');
	
	if(proposal.isValid())
		res.send(proposal);
	else{
		res.send({ errors: proposal.notifications },400);
	}
	
});

module.exports = router;