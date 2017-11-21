var mongoose = require('mongoose');

var testSchema= new mongoose.Schema({
    id:{type: Number},
    test:{type:String},
    score:{type:Number},
    user:{type: String},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('test', testSchema);
