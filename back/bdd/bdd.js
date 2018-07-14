const mysql = require('mysql'); 

const connection = mysql.createConnection({
  multipleStatements: true,
  host     : 'localhost',
  user     : 'root',
  password : 'jecode4wcs',
  database : 'artisanat_arts'
})

connection.connect(function(err){
  if(!err){
    console.log("Database is connected")
  }
  else{
    console.log('Error with connecting databse')
  }
}); 

module.exports = connection;