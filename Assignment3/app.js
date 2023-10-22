const express=require('express');
const app=express();
const PORT=5000;

app.get('/',(req,res)=>{
    res.json({msg:'I am homepage'});
});
app.get('/about',(req,res)=>{
    res.json({msg:'I am aboutpage'})
});
app.get('/contact',(req,res)=>{
    res.json({email:'support@pwskill.com'})
});
app.listen(PORT,()=>{
console.log(`server is listening at http://localhost:${PORT}`);
})