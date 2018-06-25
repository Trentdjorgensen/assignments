const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type:String
    },
    comment:[
        
    ]
    
    
})

module.exports = mongoose.model('vote',voteSchema)
