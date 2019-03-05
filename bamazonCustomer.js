var mysql = require('mysql');
var inquirer = require('inquirer');

// mySQL connection
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "SmashKazi1",
	database: "bamazon_db"
});

//largely referencing solution from playlistRead from 12.2.8
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("_____________________________________________________________________________");
    queryAllProducts();
  });

function queryAllProducts() {
connection.query("SELECT * FROM products", function (err, res) {
	if (err) throw err;
	console.log("Item:    Product: \t\tDepartment: \t\tPrice:\t Stock:");
	console.log("_____________________________________________________________________________");
	for (var i = 0; i < res.length; i++) {
		console.log(res[i].id + " \t" + res[i].product_name + " \t\t" + res[i].department_name + " \t\t" + res[i].price + " \t" + res[i].stock_quantity);
    }
    console.log("_____________________________________________________________________________");

// learnings from topSongsandAlbumsCode solutions
    inquirer
      .prompt({
        name: "IDinput",
        type: "input",
        message: "What is the ID of the Product you wish to buy?",
      }).then(function(answerID){
          var IDchoice = answerID.IDinput;
          connection.query("SELECT * FROM products WHERE ID = ?", IDchoice, function (err, res){
              if (err) throw err;
              if (res.length === 0) {
                console.log("Please select a valid ID")
              }
              else {
                  console.log("Great choice!")
                  inquirer
                  .prompt({
                      name: "quantityInput",
                      type: "input",
                      message: "How much of the product are you wanting?"
                  }).then(function(answerQuantity){
                      var quantityAmount = answerQuantity.quantityInput;
                      if (quantityAmount > res[0].stock_quantity) {
                          console.log("Insufficient quantity");
                      
                      queryAllProducts();
                      } else {
                          console.log(res[0].product_name + " bought");
                         
                          var newQuantity = res[0].stock_quantity - quantityAmount;
                          connection.query("UPDATE products SET stock_quantity = " + newQuantity + " WHERE id = " + res[0].id,
                            function(err, res) {
                                if (err) throw err;
                                console.log("Thanks!  Your order is on it's way");
                                connection.end();
                                                }
                            
                                        )
                                };
                         }
                    )};
                }
          )}
      )}
)}

                    
                      
    