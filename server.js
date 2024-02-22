const express=require('express');
const app=express();
const mongoose=require('mongoose');

const PORT=process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send('This is feature2 branch');
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
