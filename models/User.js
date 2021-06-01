const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   email:{
        type: String,
        required: true
    },
   password:{
        type:String,
        required: true
    }
    
},{timestamps: true});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {      
       if (password == user.password){
       return user;}
       throw Error('incorrect password');
      }      
    
      throw Error('incorrect email'); 
};

const User = mongoose.model('User', userSchema);
module.exports = User ;