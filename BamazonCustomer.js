var mysql = require('mysql');
var inquirer = require('inquirer');

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

connection.query("SELECT ItemID, ProductName, Price FROM bamazon.products",function(err,rows){
	if (err){
		throw err;

	}
	console.log(rows);
    id();
})
	connection.end();

var id = function() {
    inquirer.prompt({
        name: "ID",
        type: "input",
        message: "What do you want to buy",
        default: "Enter produt ID"
    }).then(function(answer) {
        quantity();
    })
};

var quantity = function() {
    inquirer.prompt({
        name: "quantity",
        type: "input",
        message: "How many do you want to buy",
        default: "Enter quantity #"
    }).then(function(answer) {
        
    })
};



