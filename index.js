



const express = require("express")
const port = 3000;
const app = express();
const db = require("./db");

//
app.get('/', (req, res) => {
    res.send(" user getted succesfull");
});
//create user
app.post('/createuser', (req, res) => {
    res.send('user created are success');
});
//update users
app.put('/updateuser', (req, res) => {
    res.send('user update success');
});

//delete users
app.delete('/removeuser', (req, res) => {
    res.send('user removed  are success');
});

//listening the server
app.listen(port, () => {

    console.log(`the server is running at localhost:${port}`);
});
