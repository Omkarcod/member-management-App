import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment";


 const userSchema = mongoose.Schema({
    name:{type:String,unique:true},
   
    surname:String,
    email:String,
    phone:String,
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'user');
const User=mongoose.model('User', userSchema);
export default User;