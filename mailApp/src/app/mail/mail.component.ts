import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  file;
  result;
  constructor(private formBuilder:FormBuilder,private mailService:MailService) { }
  mailForm:FormGroup = this.formBuilder.group({
    to:[''],
    subject:[''],
    text:[''],
  })
  selectFile(event){
    if(event.target.files.length >0){
      this.file=event.target.files[0];
    }
  }
  sendEmail(){
   const formData = new FormData();
   formData.append('file',this.file);
   formData.append('to',this.mailForm.get('to').value)
   formData.append('subject',this.mailForm.get('subject').value)
   formData.append('text',this.mailForm.get('text').value)
   this.mailService.send(formData).subscribe(data=>{
     this.result=data;
   })
  }
  ngOnInit(): void {
  }

}
