const express = require('express')
const multer = require('multer')
var app = express()
app.get('/',(req,res)=>{
    res.send('hello')
})
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/files')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

const upload = multer({
    storage,
    limits:{fileSize:3000000}
}).single('file')

app.get('/sendemail',(req,res)=>{
    upload(req,res,(err)=>{
       if(err){
           res.json({
               success:false,
               msg:err.message
           })
       }
       else{
           res.json({
               success:true,
               msg:'uploded'
           })
       }
    })
})
app.listen(8000,()=>console.log('port running in 8000'))