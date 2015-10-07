var express=require('express'),
   app=express(),
   http=require('http'),
   server=http.createServer(app);





  app.get('/hi',function(req,res){

    res.send(' sushil ');  });
   



 server.listen(1234);
