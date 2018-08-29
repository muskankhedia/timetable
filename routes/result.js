var express = require('express');
var database = require('../database.js');
var path = require("path");
var mysql = require("mysql");
var router = express.Router();

/* GET users listing. */
// router.get('/:sem/:branch/:sub_code', function(req, res, next) {
//   query = "Select * FROM "+database.tablename+" WHERE BRANCH = '" +req.params.branch+"' AND Sub_Code = '"+req.params.sub_code+"' AND sem = '"+req.params.sem+"';";
//   database.connection.query(query,function(error,results,fields){
//     if(error){
//       console.log("Error found");
//     }else{
//       res.render('result',{results:results, branch:req.params.branch, subject:req.params.subject});
//     }
//      //
//   });
// });

/**router.post('/',function(req,res,next){
  console.log("got POST request");
  console.log(req.body.stream_select);
  console.log(req.body.sem_select);
  console.log(req.body.branch_select);
  console.log(req.body.subject_select);
  console.log(req.body.section_select);
  console.log(req.body.group_select);
  var s = "Select * FROM "+database.tablename+" WHERE "
  if(req.body.stream_select){
    s = s+"STREAM = '" +req.body.stream_select+"' AND "
  }
  if(req.body.sem_select){
    s = s+"SEM = '" +req.body.sem_select+"' AND "
  }
  if(req.body.branch_select){
    s = s+"BRANCH = '" +req.body.branch_select+"' AND "
  }
  if(req.body.subject_select){
    s = s+"subject = '" +req.body.subject_select + "' AND'"
  }
  if(req.body.section_select){
    s = s+"SECTION = '" +req.body.section_select+"' AND "
  }
  if(req.body.group_select){
    s = s+"GROUP = '" +req.body.group_select+"' AND "
  }
  //s = s .slice(-3);
  s = s.slice(0, -6 );
  s = s + ';'
  console.log(s);
  database.connection.query(s,function(error,results,fields){
    if(error){
      console.log("Error found");
    }else{
      res.render('result',{results:results, sem:req.body.sem_select, branch:req.body.branch_select, subject:req.body.subject_select, section:req.body.section_select, group:req.body.group_select});
    }
     //
  });
});;
 
router.get('/:redg/:name', function(req, res, next) {
  var query = "UPDATE "+ database.tablename + " SET name = '"+req.params.name+"' WHERE REGD_NO = '"+req.params.redg+"';";
  console.log(query);
  database.connection.query(query, function (err, results, fields) {
    if (err){ 
      throw err;
    }else{
    console.log(results.affectedRows + " record(s) updated");
    res.send(results)}
  });
}); **/

module.exports = router;

