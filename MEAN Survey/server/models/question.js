var mongoose = require('mongoose');

var questionSchema= new mongoose.Schema({
    id:{type: Number},
    question:{type:String},
    Canswer:{type:String},
    Fanswer1:{type:String},
    Fanswer2:{type:String},
    user:{type: String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('question', questionSchema);
