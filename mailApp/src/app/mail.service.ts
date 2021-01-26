import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient:HttpClient) { }
  send(formData){
     return this.httpClient.post('http://localhost:8000/sendemail',formData);
  }
}
