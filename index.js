const express = require ('express');
const app = express();
const port = 4000;
const path = require('path')


  
addRequestDate = (req, res, next) => {
    let requestAt = new Date()
    console.log(requestAt)
    next()
}
//HTML
    //HOME
app.get('/',addRequestDate,function(req,res){
    res.sendFile(path.join(__dirname,'/home.html'))
});
    //CONTACT US
app.get('/contact',addRequestDate,function(req,res){
    res.sendFile(path.join(__dirname,'/contact.html'))
});

    //OUR SERVICES
app.get('/services',addRequestDate,function(req,res){
    res.sendFile(path.join(__dirname,'/services.html'))
});


app.listen(port, function(){
    console.log('the server is runnning, please open your browser at http://localhost:%s',port);
})

