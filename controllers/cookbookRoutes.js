const express = require('express')
const router = express.Router()

const Cookbook = require('../models/Cookbook.js')

// Require the Cookbook controller.


// Write the route to list all cookbooks
router.get('/', async (req,res) => {
    Cookbook.find({}).then(allCookbooks =>{
        res.json(allCookbooks)
    }).catch(err => res.json({status: 400, err: err}))
})

// Write the route to get cookbook by title
router.get('/title/:title', async (req,res) =>{
    Cookbook.findOne({title: req.params.title}).then((cookbook) =>{
        res.json(cookbook)
    }).catch(err => res.json({status: 400, err: err}))
})

// Write the route to get cookbook by year published
router.get('/year/:year', async (req,res) =>{
    Cookbook.findOne({yearPublished: req.params.year}).then((cookbook) =>{
        res.json(cookbook)
    }).catch(err => res.json({status: 400, err: err}))
})

// Write the route to create a cookbook
router.post('/', async (req,res) => {
    const cookbook = req.body
    Cookbook.create(cookbook).then(() =>{
        Cookbook.find({}).then(allCookbooks =>{
            res.json(allCookbooks)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

// Write the route to update a cookbook
router.put('/id/:id', (req,res) => {
    Cookbook.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() =>{
        Cookbook.find({}).then(allCookbooks =>{
            res.json(allCookbooks)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

// Write the route to delete the cookbook by title
router.delete('/title/:title', (req,res) =>{
    Cookbook.findOneAndDelete({title: req.params.title}).then(() => {
        Cookbook.find({}).then(allCookbooks =>{
            res.json(allCookbooks)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})


module.exports = router;