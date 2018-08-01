const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;
const userSchema = new Schema({
    username: {
      type:String,
      require:true,
    },
    photoURL: String,
    email: {
      type:String,
      require:true,
    },
    events:[
      {
        type: Schema.Types.ObjectId,
        ref: 'event'
      }
    ],
    hobbies:[
      {
        type:String,
      }
    ],
    points:{
      type:Number,
      default:0,
    },
    friendList: [
      {
        type:Schema.Types.ObjectId,
        ref: 'user'
      }
    ]
  },{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    } 
});

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('User', userSchema);