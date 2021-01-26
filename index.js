const express = require('express')
var nodemailer = require('nodemailer');
const fs = require('fs')
const multer = require('multer')
const cors = require('cors')
var app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
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


app.post('/sendemail',(req,res)=>{
    upload(req,res,async(err)=>{
       if(err){
           res.json({
               success:false,
               msg:err.message
           })
       }
       else{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'aravindk6066@gmail.com',
              pass: '@ravinDh123'
            }
          });
          var mailOptions = {
            from: 'aravindk6066@gmail.com',
            to: req.body.to,
            subject:req.body.subject,
            text: req.body.text,
            attachments:[
                {
                    path:req.file.path
                }
            ]
          }

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              res.json({
                  success:false,
                  msg:error.message 
              })
            } else {
             //fs.unlink(req.file.path);
              res.json({
                  success:true,
                  msg:'success'
              })
            }
          });
          
          //mail function
       }
    })
})
app.listen(8000,()=>console.log('port running in 8000'))