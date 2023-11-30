import { Component,OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms: Room[] = [];
  error = '';
  success = '';
  room: Room = {room_type:'', price:0, room_img:''};
        
  constructor(private roomService: RoomService, private http:HttpClient) {
  }
        
  ngOnInit() {
    this.getRooms();
  }
        
  getRooms(): void {
    this.roomService.getAll().subscribe(
      (data: Room[]) => {
        this.rooms = data;
        // console.log(data);
        this.success = 'successful retrieval of the list';
      },
      // (err) => {
      //   console.log(err);
      //   this.error = err;
      // }
    );
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
