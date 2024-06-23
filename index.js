const express = require("express"); //ya express hamra actually ma ak function ha jisy hum execute krty hn
//express is a function. This function is the main entry point to the Express library.
const app = express(); //When you call express(), you are executing the express function. This function creates and returns an instance of an Express application
// console.dir(app);  just for checking all the methods and properties

let port = 3000;

//es app object k andr ak specific method hota ha listen name sa jo k web server banata ha jo k incomming api request k lia listen krta ha
//ctrl+c ki help s ahum server ko stop krwaskty hn q k ya jabsy listen krrha ha jab tak humny nodemon nhi kia ak dafa nodemon krlengy then eski zrorat nhi hogi 

app.listen(port, () => {
  console.log(` app is listening port at ${port} `);
});
