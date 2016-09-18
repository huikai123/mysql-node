var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM bamazon.products",function(err,rows){
	if (err){
		throw err;

	}
	console.log(rows);
})
	connection.end();


