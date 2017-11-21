var mongoose = require('mongoose');

var userSchema= new mongoose.Schema({
    id:{type: Number},
    email:{type:String, required:true,unique:true,validate:{
      validator: function(value){
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
      },
      message: "not a valid email!"
      }
    },
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    password:{type:String, required:true},
  }, { timestamps: { createdAt: 'created_at', updatedAt:'updated_at'}
});
mongoose.model('user', userSchema);
