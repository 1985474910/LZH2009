var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'woshizihao',
    database : 'api2009'
});

connection.connect();
var sql = "select * from p_goods limit 10";
connection.query(sql, function (error, results, fields) {
    // if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    console.log(results)
});

connection.end();