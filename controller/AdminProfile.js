const SuperAdminModel = require("../models/AdminProfileSchema")

// const bcrypt=require('bcryptjs')
const bcrypt= require('bcrypt')

const createAdminProfile=async(req,res)=>{
const {name,email,Profile_Pic,password}=req.body

    try {
        const salt =await bcrypt.genSaltSync(10);
        const hashpassword =await bcrypt.hashSync(password, salt);
        const payload={
            name,email,Profile_Pic,
            password:hashpassword,
            Super_Admin:"superadmin"
        }
        const createSuperAdmin=await SuperAdminModel.create(payload)
        return  res.json({
            data:createSuperAdmin,
            message:"Super Admin data Created Successfully",
            success:true,
            error:false
        })
        
    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

const updateAdminProfile=async(req,res)=>{
    const id=req.params._id
    console.log(id);
    const {name,email,Profile_Pic,password}=req.body

    try {

   
   
            const salt =await bcrypt.genSaltSync(10);
            const hashpassword =await bcrypt.hashSync(password, salt);
            const updateAdminProfile=await SuperAdminModel.findByIdAndUpdate({_id:id},{$set:{name,email,Profile_Pic,password:hashpassword}},{new:true})
         console.log(updateAdminProfile);
            return res.json({
                data:updateAdminProfile,
                message:"admin profile updated successfully",
                success:true,
                error:false
            })
     
        
    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}
const findsuperadmin=async(req,res)=>{
    const {password , email}=req.body

    console.log('Super_Admin',password)
    try {

        const superdata=await SuperAdminModel.findOne({email:email})
        console.log('superdata',superdata)
        if(superdata){
        
            const comparepassword=await bcrypt.compareSync(password,superdata.password)
                if(comparepassword){
                    return res.json({
                        data:superdata,
                        message:"admin login successfully",
                        success:true,
                        error:false
                    })
                }
        
         
       
        }
      
    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}


module.exports={
    createAdminProfile,
    updateAdminProfile,
    findsuperadmin

}