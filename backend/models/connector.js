const pool = require('./dbconnection');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

var resultsNotFound = {
  "errorCode": "0",
  "errorMessage": "Operation not successful.",
  "rowCount": "0",
  "data": ""
};
var resultsFound = {
  "errorCode": "1",
  "errorMessage": "Operation successful.",
  "rowCount": "1",
  "data": ""
};

module.exports = {
  createUser: function (req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      if (req.body.password!=req.body.password1){
        resultsNotFound["errorMessage"] = "Password mora biti identican";
        return res.send(resultsNotFound);
      }
 
      var values;

      if (req.body.vrsta=='student'){
    //    resultsNotFound["errorMessage"] = "STUDENT !!!";
    //    return res.send(resultsNotFound); 
        
        values = { 
          'username':req.body.username,
          'pass':req.body.password,
          'ime': req.body.ime,
          'prezime': req.body.prezime,
          'tel': req.body.tel,
          'email': req.body.email,
          'god': req.body.god,
          'isDipl': req.body.dipl,
          'isAdmin':0,
          'isComp':0,
         };
      };


      if (req.body.vrsta=='kompanija'){      
     //   resultsNotFound["errorMessage"] = "Mpanija!!!";
     //   return res.send(resultsNotFound);        
        
        values = { 
          'username':req.body.username,
          'pass':req.body.password,
          'ime': req.body.ime,
          'prezime': req.body.prezime,
         // 'tel': '0',
          'email': req.body.email,
          //'god': '0',
          'isDipl': 0,
          'isAdmin':0,
          'isComp':1,
          'nazivcomp': req.body.nazivcomp,
          'adresacomp': req.body.adresacomp,
          'grad': req.body.grad,
          'pib': req.body.pib,
          'brzap': req.body.brzap,
          'sajt': req.body.sajt,
          'delatnost': req.body.delatnost,
          'specijalnost': req.body.specijalnost             
         };
         //resultsNotFound["errorMessage"] = "Necu necu . "+values.god;
        // return res.send(resultsNotFound);
        };

        var sql = 'INSERT INTO user SET ?';

        connection.query(sql, values, function (error, results, fields) {
          if (error) {
            resultsNotFound["errorMessage"] = "Username postoji u bazi.";
            return res.send(resultsNotFound);
          } else 
          {
          connection.release();
          if (error) throw error; 

          return res.send(resultsFound);
          }          
        });
      });
   
  },

  loginUser: function (req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; 

        var sql = 'SELECT * FROM `user` WHERE `username` = ?';
        var values = [req.body.username]
       
        connection.query(sql, values, function (error, results, fields) {
          if (error) {
            resultsNotFound["errorMessage"] = "Nešto je trulo na serveru danskom.";
            return res.send(resultsNotFound);
          }
          if (results =="") {
            resultsNotFound["errorMessage"] = "Ne postoji username u bazi";
            return res.send(resultsNotFound);
          }

      if (req.body.password==results[0].pass) {
        var token = {
          "token":  req.body.username,
          "isDipl":  results[0].isDipl,
          "isComp":  results[0].isComp,
          "isAdmin":  results[0].isAdmin,
          "nazivcomp": results[0].nazivcomp
            
        }
        resultsFound["data"] = token;
        res.send(resultsFound);

      } else {
        resultsNotFound["errorMessage"] = "Pogrešna lozinka.";
        return res.send(resultsNotFound);
      }
    ;

       
          connection.release(); 
          if (error) throw error;
        });
      });
  }, 



  lozinka: function (req, res) {
 
    pool.getConnection(function (err, connection) {
      if (err) throw err;

      var sql = 'SELECT * FROM `user` WHERE `username` = ?';
        var values = [req.body.username];

      connection.query(sql, values, function (error, results, fields) {
        if (error) {
          resultsNotFound["errorMessage"] = "Nešto je trulo na serveru danskom.";
          connection.release();
          return res.send(resultsNotFound);
        }

        if (results =="") {
          resultsNotFound["errorMessage"] = "Ne postoji username u bazi";
          connection.release();
          return res.send(resultsNotFound);
        } 
        if (req.body.password!=results[0].pass) {
          resultsNotFound["errorMessage"] = "Nije dobar stari password";
          connection.release();  
          return res.send(resultsNotFound);
         
      }
  
    if (req.body.password1==results[0].pass) {
      resultsNotFound["errorMessage"] = "Novi password je isti kao stari";
      connection.release();
      return res.send(resultsNotFound);
    }
    sql = 'UPDATE user SET ? WHERE  `username`=? ';
     
    connection.query(sql,[ { 'pass': req.body.password1},req.body.username], function (error, results, fields) {
      if (error) {
        resultsNotFound["errorMessage"] = "Nešto je trulo na serveru danskom.";
        connection.release();
        return res.send(resultsNotFound);

      } else {

      //  console.log('Rows affected:', results.affectedRows);
        connection.release();
        if (error) throw error;

        resultsFound["data"] = results.affectedRows;
        return res.send(resultsFound);
            }
    });
    
 
     });

    });

  },


  pretraga: function (req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;

        var sql = 'SELECT * FROM `user` WHERE isComp=1 ';

        if (req.body.grad!=null && req.body.grad!="") {sql+=" and grad like '%"+req.body.grad+"%'";}
        if (req.body.kompanija!=null  && req.body.kompanija!="") {sql+=" and nazivcomp like '%"+req.body.kompanija+"%'"}

        if (req.body.delatnost.length>0) {
          sql+=" and delatnost in ( ";
          for (i=0;i<req.body.delatnost.length;i++){
            sql+="'"+req.body.delatnost[i]+"' ";
            if (i<req.body.delatnost.length-1)sql+=", ";          
          }
          sql+=" ) "
          
          br= req.body.delatnost;
     
        }
     
     //   resultsNotFound["errorMessage"] = sql;
     //       return res.send(resultsNotFound);

        connection.query(sql, function (error, results, fields) {
          if (error) {
            resultsNotFound["errorMessage"] = "Something went wrong with Server.";
            return res.send(resultsNotFound);
          }
          if (results =="") {
            resultsNotFound["errorMessage"] = "Nema kompanija koje zadovoljavaju uslove pretrage.";
            return res.send(resultsNotFound);
          }
          resultsFound["data"] = results;
          res.send(resultsFound);
         
          connection.release(); 
          if (error) throw error; 
        });
      });
  },



  pretragacomp: function (req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;

        var sql = 'SELECT * FROM `konkurs` WHERE CURRENT_TIMESTAMP<rok ';

        if (req.body.konkurs!=null && req.body.konkurs!="") {sql+=" and naziv like '%"+req.body.konkurs+"%'";}
        if (req.body.kompanija!=null  && req.body.kompanija!="") {sql+=" and owner like '%"+req.body.kompanija+"%'"}

        if (req.body.delatnost.length>0) {
          sql+=" and tip in ( ";
          for (i=0;i<req.body.delatnost.length;i++){
            sql+="'"+req.body.delatnost[i]+"' ";
            if (i<req.body.delatnost.length-1)sql+=", ";          
          }
          sql+=" ) "
          
          br= req.body.delatnost;
     
        }
     
     //   resultsNotFound["errorMessage"] = sql;
     //       return res.send(resultsNotFound);

        
     
  
        connection.query(sql, function (error, results, fields) {
          if (error) {
            resultsNotFound["errorMessage"] = "Something went wrong with Server.";
            return res.send(resultsNotFound);
          }
          if (results =="") {
            resultsNotFound["errorMessage"] = "Nema konkursa koji zadovoljavaju uslove pretrage.";
            return res.send(resultsNotFound);
          }
          resultsFound["data"] = results;
          res.send(resultsFound);
         
          connection.release(); 
          if (error) throw error; 
        });
      });
  },





  dodajk: function (req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

 
      var values;

        values = { 
          'naziv':req.body.naziv,
          'tekst':req.body.tekst,
          'rok': req.body.rok,
          'owner': req.body.nazivcomp,
          'tip': req.body.vrsta,
        }



        var sql = 'INSERT INTO konkurs SET ?';

        connection.query(sql, values, function (error, results, fields) {
          if (error) {
            resultsNotFound["errorMessage"] = "Greska u bazi.";
            return res.send(resultsNotFound);
          } else 
          {
          connection.release();
          if (error) throw error; 

          return res.send(resultsFound);
          }          
        });
      });
   
  },



  prijava: function (req, res) {
 
    pool.getConnection(function (err, connection) {
      if (err) throw err;

      var sql = "SELECT * FROM prijava where idkonkurs='"+req.body.idkonkurs+"' and owner='"+req.body.owner+"' and username='"+req.body.username+"'";
    //    var values = [req.body.id, req.body.owner, req.body.username];

      connection.query(sql,function (error, results, fields) {
        if (error) {
          resultsNotFound["errorMessage"] = "Nešto je trulo na serveru danskom.";
          connection.release();
          return res.send(resultsNotFound);
        }

 
  
        if (results=="") 
{
    sql = 'INSERT INTO `prijava` SET ? ';
    
    var vals = {
      'idkonkurs':req.body.idkonkurs,
      'username':req.body.username,
      'owner':req.body.owner,          
      'status':0,
     }

    connection.query(sql,vals, function (error, results, fields) {
      if (error) {
        resultsNotFound["errorMessage"] = "Nešto je trulo na serveru danskom.";
        connection.release();
        return res.send(resultsNotFound);

      } else {

      //  console.log('Rows affected:', results.affectedRows);
        connection.release();
        if (error) throw error;

        resultsFound["data"] = results.affectedRows;
        return res.send(resultsFound);
            }
    });

    //ovde 
  }
    
  else 
  {
    resultsNotFound["errorMessage"] = "Već ste prijavljeni na ovaj konkurs";
    connection.release();
    return res.send(resultsNotFound);
  } 
 
     });

    });

  },




};