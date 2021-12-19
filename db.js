const mongoose=require('mongoose')

const dbURI='mongodb://localhost:27017/TodoListV01'

mongoose.connect(dbURI)

const db = mongoose.connection;

db.on('erroe',(err)=>{

    console.log('error in mongoDB');
})


db.on('connecetd',(err)=>{

    console.log('mongoDB is CONNECTED');
})