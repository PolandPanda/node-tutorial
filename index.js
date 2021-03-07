// import 
const express = require('express');
//all library is in function&variables
const app = express();

app.listen(3000, () => console.log("listening..."));
// serve static content
app.use(express.static('public'));;
