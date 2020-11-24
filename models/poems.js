const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const likeSchema = new Schema({
  liker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    maxlength: 128
  }
}, {
  timestamps: true
});

const commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
    maxlength: [512, 'A max of 512 characters allowed!']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    maxlength: 128
  }
}, {
  timestamps: true
});

const poemSchema = new Schema({
  heading: {
    type: String,
    required: true,
    unique: true,
    maxlength: [32, 'A max of 32 characters allowed!']
  },
  subheading: {
    type: String,
    default: '',
    maxlength: [128, 'A max of 128 characters allowed!']
  },
  body: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '',
    maxlength: [128, 'Max image name length = 512 characters!']
  },
  datewritten: {
    type: Date,
    default: '',
    maxlength: 32
  },
  chapter: {
    type: Number,
    required: true,
    min: 0
  },
    label: {
    type: String,
    default: '',
    maxlength: 32
  },
  price: {
    type: Currency,
    required: true,
    min: 0,
    default: 1
  },
  featured: {
    type: Boolean,
    default: false    
  },
  likes:[likeSchema],
  comments:[commentSchema]
}, {
  timestamps: true
});

const Poems = mongoose.model('Poem', poemSchema);

module.exports = Poems;