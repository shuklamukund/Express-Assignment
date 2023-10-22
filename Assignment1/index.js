const http=require('http');
const PORT=5001;
const server=http.createServer((req,res)=>{
if(req.url=='/'){
   res.statusCode=200;
   res.setHeader('Content-Type','text/plain');
   res.end('Welcome to Men & Women Dummy Data');
}

if(req.url=='/men'){

    
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('men section');
}

if(req.url=='/women'){
   
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('women section');
}

if(req.url=='/other'){
    res.statusCode=400;
    res.setHeader('Content-Type','text/plain');
    res.end('page not found!!');
}
res.end();
});

server.listen(PORT,()=>{
console.log(`HTTP server is listening at http://localhost:${PORT}`);
});