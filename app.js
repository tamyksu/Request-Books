const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost/Books'
const app = express()
 app.use(bodyParser.urlencoded({extended:true}))
 mongoose.connect(url,{useNewUrlParser:true})
// const db = mongoose.connection

//  db.on('open',function(){
//      console.log("connected :)")
//  })
app.use(express.json())

const bookRouter = require('./routes/books')
app.use('/books',bookRouter)

app.listen(4000,()=>{
    console.log("Connected =]")
})

