//Import connection
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const authorSchema = new Schema({
    firstName: String,
    lastName: String,
    cookbooks: [{
        type: Schema.Types.ObjectId,
        ref: "Cookbook"
    }]
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author

/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/





//export model named "Author"




