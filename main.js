const express = require('express');
const app = express();
const port = 3000;

app.get('/' ,  function(req, res){
        res.send("hello world");
})

app.get('/info', function(req , res){
        res.send("this is info");
})

app.listen(port);

