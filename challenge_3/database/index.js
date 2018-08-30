var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'Student12345!',
    database: 'multistep_checkout'
});

connection.connect();

var postMessage = function(name, callback) {
    // var query = `insert into profile (name, email, password) values ('${name}', '123@gmail.com', 'yoyoyo')`;
    var query = 'select * from profile';
    connection.query(query, callback); //.query also has default arguments
}

module.exports = { postMessage };