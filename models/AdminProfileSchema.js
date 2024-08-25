const mongoose=require('mongoose')

const adminprofileSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    Profile_Pic:String,
    password:String,
    Super_Admin:String

},
{
    timestamps:true
})
const SuperAdminModel=mongoose.model('Super Admin',adminprofileSchema)
module.exports=SuperAdminModel