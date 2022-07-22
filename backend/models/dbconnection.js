var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'pia',
});
pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
  });

module.exports = pool;
