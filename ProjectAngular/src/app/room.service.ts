import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl = 'http://localhost/Angular/ProjectAngular/api';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/room.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
}
}
