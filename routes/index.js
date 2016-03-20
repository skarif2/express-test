var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var testSchema = mongoose.Schema({
	choice: String,
	name: String
});

var testModel = mongoose.model( 'choices', testSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/healthcheck', function(req, res){
	var responseObject = { message: 'OK' };
	res.send(responseObject);
});

var database = [];

router.post('/ilike/:choice/:name', function(req, res){
	if(req.body.formfactor){
		console.log(req.body.formfactor);
	} else {
		console.log('No form factor!');
	}
	var choice = req.params.choice;
	var name = req.params.name;
	
	var newChoices = new testModel();
	
	newChoices.choice = choice;
	newChoices.name = name;
	newChoices.save( function( err, savedObject ){
		if(err) {
			console.log(err);
			res.status(500).send();
		} else {
			res.send(savedObject);
		}
	});

	//	database.push({ choice: choice, name: name });
	//	var responseObject = { message: 'Hey ' + name + '! I also like ' + choice };
  //	res.send(responseObject);
});

router.put('/update/:id', function(req, res){
	var id = req.params.id;

	testModel.findOne( { _id: id }, function( err, foundObject){
		if(err){
			console.log(err);
			res.status(500).send();
		} else {
			if( !foundObject ){
				res.status(404).send();
			} else {
				if( req.body.name ){
					foundObject.name = req.body.name;
					//	foundObject[0].name = req.body.name;
				}
				if( req.body.choice ){
					foundObject.choice = req.body.choice;
					//	foundObject[0].choice = req.body.choice;
				}
				foundObject.save(function(err, updatedObject){
					if(err){
						console.log(err);
						res.status(500).send();
					} else {
						res.send(updatedObject);
					}
				});
			}
		}
	});
});

router.get("/doubleinsert/:name/:choice', function(req, res){
	
});
router.delete('/delete/:id', function(req, res){
	var id = req.params.id;
	testModel.findOneAndRemove( {_id: id}, function(err, foundObject){
		if(err){
			console.log(err);
			res.static(500).send();
		} else {
			res.send(foundObject)
		}
	});
});

router.get('/ilike', function(req, res){
	var logvalue = req.headers['log'];
	if( logvalue && logvalue == 'info'){
		console.log('Request received for /ilike');
	}
	
	var select = req.query.select;
	var database = [];

	testModel.find( {}, function( err, foundData ){
		if(err){
			console.log(err);
			res.status(500).send();
		} else {
			database = foundData;
			if( database.length != 0 ){
				var responseObject = database;
				if(select && select == 'count'){
					responseObject = { count: database.length };
				}
				res.send(responseObject);
			} else {
				var responseObject = {};
				if(select && select == 'count'){
					responseObject = { count: 0 };
				}
				res.status(404).send(responseObject);
			}
		}
	});
});

module.exports = router;
