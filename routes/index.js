var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
var path = require("path");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
	extended:true,
}));
var database = require('../database.js');


router.get('/', function (req, res) {
	console.log("inside API");
	console.log("table name - " + database.tablename);
	database.connection.query('SELECT DISTINCT STREAM FROM ' + database.tablename + ' ORDER BY STREAM ASC;', function (error, results, fields) {
		console.log(results);
		var streams = results;
		database.connection.query('SELECT DISTINCT SEM FROM ' + database.tablename + ' ORDER BY SEM ASC;', function (error, results, fields) {
			console.log(results);
			var sems = results;
			database.connection.query('SELECT DISTINCT BRANCH FROM ' + database.tablename + ' ORDER BY BRANCH ASC;', function (error, results, fields) {
				var branches = results;
				//database.connection.query('SELECT DISTINCT Subject FROM ' + database.tablename + ' ORDER BY Subject ASC;', function (error, results, fields) {
					//var subjects = results;
					database.connection.query('SELECT DISTINCT SECTION FROM ' + database.tablename + ' ORDER BY SECTION ASC;', function (error, results, fields) {
						var section = results;
						database.connection.query('SELECT DISTINCT GROUP FROM ' + database.tablename + ' ORDER BY SECTION ASC;', function (error, results, fields) {
							var group = results;
							//console.log(subjects)

							res.render('index', { 'streams': streams, 'sems': sems, 'branches': branches /*, 'subjects': subjects*/ });
						});

					});
				//});
			});
		});
	});
});

router.get("/api/stream/:name" , function(req,res){
	console.log(req.params.name);
	var query = 'SELECT SEM FROM ' + database.tablename + ' WHERE STREAM = "' + req.params.name + '" GROUP BY SEM;';
	database.connection.query(query, function (error, results, fields) {
		console.log(results);
		if (error) {
			console.log(error);
		} else {
			res.send(results);
		}
	});
});

router.get("/api/sem/:sem/:stream" , function(req,res){
	console.log(req.params.name);
	//var query = 'SELECT DISTINCT BRANCH FROM ' + database.tablename + ' WHERE SEM = "' + req.params.sem + '" AND STREAM =" ' + req.params.stream + '" GROUP BY BRANCH;'; //'SELECT SEM FROM ' + database.tablename + ' WHERE STREAM = "' + req.params.name + '" GROUP BY SEM;';
	var query = "SELECT DISTINCT BRANCH FROM " + database.tablename + " WHERE STREAM = '" + req.params.stream + "' AND SEM = '" + req.params.sem + "' ;" ;
	console.log(query);
	database.connection.query(query, function (error, results, fields) {
		console.log(results);
		if (error) {
			console.log(error);
		} else {
			res.send(results);
		}
	});
});

router.get("/details/:stream/:sem/:branch/:section/:group/:room/:date" , function(req,res){
	console.warn('called')
	var query = "SELECT SL , NAME , REGNO FROM " + database.tablename +" WHERE STREAM = '" +req.params.stream + "' SEM ='" +req.params.sem + "' BRANCH = '" +req.params.branch + "SEC' AND  '"  + req.params.sec +
	"GROUP' ="+ req.params.group+";"  ;
	database.connection.query(query, function (error, results, fields) {
		console.log(results);
		if (error) {
			console.log(error);
		} else {
			let q = ''

			// console.warn(results)
			// res.render(results);
		}
	});
});

router.post('/result', (req, res) => {
	let	streamOutput = req.body.stream_select
		sem = req.body.sem_select,
		branch = req.body.branch_select,
		sub = req.body.subject,
		section = req.body.section,
		grp = req.body.group,
		roomNo = req.body.rn;
		date = req.body.DOE;
		//date = req.body.DOE;
	q= 'SELECT SL , NAME , REGNO FROM ' + database.tablename +" WHERE STREAM = '" +streamOutput
	 + "' and SEM =" +sem + " and BRANCH = '" +branch + "' AND  "  +
	"GRP ="+grp+";"  ;
	database.connection.query(q, function (error, results) {
		console.debug('output from database below')
		// console.log(results);
		if (error) {
			console.error(error);
		} else {
			let q ;
			let resultsArr = [];
			

			for(let i=0; i<results.length; i++) {
				obj = {
					'sl':'',
					'name':'',
					'regno':'',
				};
				// console.warn(results[i]['SL']);
				obj.sl =results[i]['SL'] 
				obj.name =results[i]['NAME'] 
				obj.regno =results[i]['REGNO'] 
				resultsArr.push(obj)
			}
			// console.warn(resultsArr)
		// res.send(resultsArr)
		res.render(__dirname+'/details.ejs', {arrResult: resultsArr,
			semester: sem,subject:sub,group:grp,branch:branch,roomNo:roomNo,date:date})

			// console.warn(results)
			// res.render(results);
		}
	});

	console.warn(q)
	console.warn(streamOutput + roomNo)
	;
	console.warn('working called')

})




module.exports = router;


