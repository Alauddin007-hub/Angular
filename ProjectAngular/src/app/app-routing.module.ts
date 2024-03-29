import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoomComponent } from './room/room.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AvaiRoomComponent } from './avai-room/avai-room.component';
import { BookingRoomComponent } from './booking-room/booking-room.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'room', component: RoomComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'blog', component: BlogComponent},
  {path:'contact', component: ContactComponent},
  {path:'avairoom', component: AvaiRoomComponent},
  {path:'bookingroom', component: BookingRoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
