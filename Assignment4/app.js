const express=require('express');
const app=express();
const PORT=5000;

app.get('/random',(req,res)=>{
    const randomNumber=Math.floor(Math.random()*100)+1;

    res.json({randomNumber});
});

app.listen(PORT,()=>{
console.log(`server is listening at http://localhost:${PORT}`);
})