const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
  title : String, // String is a short hand for 'type: String'
  author: String,
  body: String,
  comments: [{body: String, date:Date}],
  date:{type: Date, default: Date.now()},
  hidden : Boolean,
  meta:{
    votes: Number,
    favs: Number
  }
});

const personSchema = new Schema({
  name: {
    type:String, 
    required: true
  },
  age: Number,
  favoriteFoods: [String],
  gender: {type: String, default:"doesnt metter"}
});

//export{blogSchema, personSchema};