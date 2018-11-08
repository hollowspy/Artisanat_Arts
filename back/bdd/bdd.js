const mysql = require('mysql'); 

//Utilisation Mysql en local
const connection = mysql.createConnection({
  multipleStatements: true,
  host     : 'localhost',
  user     : 'root',
  password : 'jn8bb11',
  database : 'artisanats_arts',
  port : 3306,
})

//Utilisation via MySQL online sur www.db4free.net
// const connection = mysql.createConnection({
//   multipleStatements: true,
//   host     : 'sql7.freemysqlhosting.net',
//   user     : 'sql7250961',
//   password : 'cJCkfU4J8u',
//   database : 'sql7250961'
// })


connection.connect(function(err){
  if(!err){
    console.log("Database is connected")
  }
  else{
    console.log('Error with connecting databse', err)
  }
}); 

module.exports = connection;
