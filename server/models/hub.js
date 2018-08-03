const Schema = require('mongoose').Schema;
const hubSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref: 'user',
    required:true
  },
  numberParticipants:Number,
  participants:[
    {
      type:Schema.Types.ObjectId,
      ref: 'user',
    }
  ],
  hobbyType:{
    type:String,
    required:true,
  },
  description:String,
  location:String,
  date:{
    type:String,
    default:'Now'
  },
  comments:[String],
  status:{
    enum:['open', 'closed']
  },
},{
  timestamps:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  } 
});

module.exports = require('mongoose').model('Hub', hubSchema);