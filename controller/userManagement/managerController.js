let Manager= require('../../models/userManage/Manager')
const bcrypt= require('bcrypt')

let createManager= async(req,res)=>{
    let {name,email,userName,password,phone,confirmPassword,image}=req.body;

    try {
        let manager= await Manager.findOne({email:email});
        if(!manager){
            const salt = bcrypt.genSaltSync(10);
            const hashpassword = bcrypt.hashSync(password, salt);

         manager= await new Manager({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword,
            userName:req.body.userName,
            phone:req.body.phone,
            confirmPassword:req.body.password,
            image:req.body.image
        })
        await manager.save()
         return res.status(200).json({success:true,msg:"Manager created successfully",manager})
    }
    else{
        return res.status(200).json({success:true,msg:"Manager already exists"})
    }
    } catch (error) {
        // res.send("error in creating Manager")
        return res.status(500).json({ success:false,msg:"error in register Manager",error:error.message})
    }
}

let loginManager= async(req,res)=>{
    let {email,password}= req.body
  try {
      let manager= await Manager.findOne({email:req.body.email})
      if (manager) {
        let comparePassword= bcrypt.compareSync(password,manager.password); // true
        if(comparePassword){
           return res.json({success:true,msg:"Manager logged in successfully",manager})
        }
        else{
            return res.json({success:false,msg:"Invalid password"})
        }
        
    } else {
        return res.json({success:false,msg:"invalid credentials or Manager not found"})
    }
  } catch (error) {
    res.json({success:false,msg:"error in logged in Manager"})
  }

}

let deleteManager= async(req,res)=>{
    let id=req.params.id;
 try {
    await Manager.findByIdAndDelete(id)
    return res.status(200).json({success:true,msg:"Manager deleted successfully"})
 } catch (error) {
return res.status(500).json({success:false,msg:"error in deletion",error:error.message})
 }
}


const updateManager =async(req,res)=>{
    let {name,email,username,password,phone,confirmPassword,image}=req.body
    let id= req.params.id;
    try {
        let update= await Manager.findByIdAndUpdate({_id:id},{$set:{name,email,username,password,phone,confirmPassword,image}},{new:true})
        res.status(200).json({success:true,msg:"Manager updated successfully",update})
    } catch (error) {
        response.status(500).json({success:false,msg:"error in updating Manager",error:error.message})
    }
}

const getAllManager= async(req,res)=>{
   
    try {
        let allList= await Manager.find()
        if (allList.length) {
            res.status(200).json({success:true,msg:"fetched all allManager list successfully",allList})
            
        } else {
            return res.status(404).json({success:false,msg:"no allManager list found"})
        }
    } catch (error) {
        res.status().json({success:false,msg:"error in fetching allManager"})
    }
}

module.exports={
   createManager,
   loginManager,
   updateManager,
   deleteManager,
   getAllManager
}