const express=require("express")
const app=express()

const db=require('./db')
const Todo=require('./todo')
console.log(Todo);

app.get('/',(req,res)=>{
    res.json('get / is alive.... :)')
})

app.listen(5000,()=>{
    console.log('server is working...')
})
app.get('/tasks',(req.res) =>{
    
    res,find({},(err,date)=>{
        if(err){
            console.log('ERROR:',err)
        } else{
            res,stat
        }
    })
})