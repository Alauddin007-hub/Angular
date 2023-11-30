import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http:HttpClient){

  }

  onSubmit(data:any){
    this.http.post('http://localhost/Angular/ProjectAngular/api/contact.php', data).subscribe(result=>{
      // console.log(result);
      if(result){
        alert("Complain Sent Successfully");
      } 
    })
  }

}
