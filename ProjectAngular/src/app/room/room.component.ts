import { Component, OnInit } from '@angular/core';
import { Room } from '../room';

import { RoomService } from '../room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];
  error = '';
  success = '';
  room: Room = {room_type:'', price:0, room_img:''};
        
  constructor(private roomService: RoomService) {
  }
        
  ngOnInit() {
    this.getRooms();
  }
        
  getRooms(): void {
    this.roomService.getAll().subscribe(
      (data: Room[]) => {
        this.rooms = data;
        console.log(data);
        this.success = 'successful retrieval of the list';
      },
      // (err) => {
      //   console.log(err);
      //   this.error = err;
      // }
    );
  }
}
