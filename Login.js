var mysql = require('mysql');

//This bit of code deals is me experimenting
/* var prompt = require('prompt');

prompt.get(['username','password'], function (err, result) {
	if (err) throw err;
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  password: ' + result.password);
}); */

var con = mysql.createConnection({
  host: "jacobsladderintaketeam.cik1yin3pif1.us-east-1.rds.amazonaws.com",
  user: "intaketeam",
  password: "IwantanA123",
  database: "intaketeam"
});

////////////
//queries///
////////////



//Create User
const newUser = {
  Username: 'EmilyTheCSGirl',
  IsAdmin: 'False',
  FirstName: 'Emily',
  LastName: 'TooLazyToLookUp',
  Password: 'Password12345'
}

/* con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO User SET ?";
  con.query(sql, newUser, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}); */

const searchUser = 'EmilyTheCSGirl'


/* con.connect(function(err) {
  if (err) throw err;
  //con.query("SELECT * FROM User WHERE Username = ?", [searchUser], function (err, result, fields) {
  con.query("SELECT * FROM User WHERE Username = ?", searchUser,  function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}); */
