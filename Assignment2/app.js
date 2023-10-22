const express=require('express');

const PORT=5001;

const app=express();

let counter=0;
app.get('/',(req,res)=>{
res.json({counter});
});

app.get('/increment',(req,res)=>{
    counter++;
    res.json({counter});
    });
    app.get('/decrement',(req,res)=>{
        counter--;
        res.json({counter});
        });
app.listen(PORT,()=>{
    console.log(`server is listening at http://localhost:${PORT}`);
})