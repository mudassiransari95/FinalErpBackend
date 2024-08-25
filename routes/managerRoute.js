const express= require ('express');
const { createManager, loginManager, deleteManager, updateManager, getAllManager } = require('../controller/userManagement/managerController');
const router = express.Router()

router.post('/register',createManager)
router.post('/login',loginManager)
router.delete('/delete/:id',deleteManager)
router.put('/update/:id',updateManager)
router.get('/getAllManager',getAllManager)


module.exports= router;