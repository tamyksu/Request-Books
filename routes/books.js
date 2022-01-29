const express = require('express');

const router = express.Router();
const Book = require('../models/books')

router.get('/', async(req,res)=>{
    try{
    const books = await Book.find()
    res.json(books)
    }
    catch(err){
        console.log("Error")
    }
})

router.post('/',async(req,res)=>{
const newBook= new Book({
    name:req.body.name,
    cost:req.body.cost,
    _id: req.body.id
});
    try{
        const book1 = await newBook.save()
        res.json(book1)

    }
    catch(err)
    {
        res.send("Error" +err)
    }
})

router.get('/:id', async(req,res)=>{
    try{
    const books = await Book.findById(req.params.id)
    res.json(books)
    }
    catch(err){
        console.log("Error")
    }
})

router.patch('/:id', async(req,res)=>{
    try{
    const books = await Book.findById(req.params.id)
    books.cost = req.body.cost
    const book1 = await books.save()
    res.json(book1)
    }
    catch(err){
        console.log("Error")
    }
})
router.delete('/:id', async(req,res)=>{
    try{
    const books = await Book.findById(req.params.id)
    //books.cost = req.body.cost
    const book1 = await books.delete()
    res.json(book1)
    }
    catch(err){
        console.log("Error")
    }
})
module.exports = router