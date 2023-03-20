const crypto = require("crypto");
var router = require('express').Router();
var bodyParser = require('body-parser');

const analysisDB = [
	{
		identification: '11102768774', date: Date(2023,4,19)
	}];

router.use(bodyParser.json());

router.get('/:id?', (req, res) => {
	var idParam = req.params.id;
	if(idParam){
		console.log('requisitando a analise com id ' + idParam);
		selectedAnalysis = analysisDB.filter(a => a.id === idParam);
		res.send(selectedAnalysis);
		return;
	}
	var identificationFromQuery = req.query.identification;
	if(identificationFromQuery){
		var filteredAnaysis = analysisDB.filter(a => a.identification.startsWith(identificationFromQuery));
		res.send(filteredAnaysis);
		return;
	}

	res.send(analysisDB);
});


router.post('/', (req, res) => {
	var postedAnalysis = req.body;

	postedAnalysis.identification = postedCar.identification.toLowerCase();
	const analysisAlreadyExists = analysisDB.some(a => c.identification === postedCar.identification);

	if(analysisAlreadyExists){
		res.sendStatus(409);
		return;
	}
	const id = crypto.randomBytes(16).toString("hex");
	console.log(id); 

	postedAnalysis.id = id;
	analysisDB.push(postedAnalysis);
	res.status(201).send(postedAnalysis);
});


module.exports = router;