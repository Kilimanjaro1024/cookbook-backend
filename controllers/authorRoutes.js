const express = require('express')
const router = express.Router()

const Author = require('../models/Author.js')
const Cookbook = require('../models/Cookbook.js')

// Write the route to list all authors
router.get('/', async (req,res) => {
    Author.find({}).populate("cookbooks").then(allAuthors =>{
        res.json(allAuthors)
    }).catch(err => res.json({status: 400, err: err}))
})

// Write the route to get authors by firstname
router.get('/name/:name', async (req,res) =>{
    Author.findOne({firstName: req.params.name}).populate("cookbooks").then((author) =>{
        res.json(author)
    }).catch(err => res.json({status: 400, err: err}))
})

// Write the route to create an author:
router.post('/', async (req,res) => {
    const author = req.body
    Author.create(author).then(() =>{
        Author.find({}).populate("cookbooks").then(allAuthors =>{
            res.json(allAuthors)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

// Write the route to update an author
router.put('/:id', async (req,res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() =>{
        Author.find({}).populate("cookbooks").then(allAuthors =>{
            res.json(allAuthors)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

// Update the cookbook using Postman.
router.put('/:id/:cookbookId', (req,res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() =>{
        Cookbook.findByIdAndUpdate(req.params.cookbookId, req.body, {new: true}).then((cookbook) => {
            res.json(cookbook)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)
router.delete('/deletebooksby/:id', (req,res) =>{
    Author.findById(req.params.id).then((author) => {
        console.log(author.cookbooks)
        for(let i = 0; i < author.cookbooks.length; i++){
            console.log(author.cookbooks[i])
            Cookbook.deleteOne({_id: author.cookbooks[i]._id}).catch(err => res.json({status: 400, err: err}))
        }
        res.json(author)
    }).catch(err => res.json({status: 400, err: err}))
    
})

module.exports = router