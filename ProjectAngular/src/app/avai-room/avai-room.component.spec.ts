import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaiRoomComponent } from './avai-room.component';

describe('AvaiRoomComponent', () => {
  let component: AvaiRoomComponent;
  let fixture: ComponentFixture<AvaiRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaiRoomComponent]
    });
    fixture = TestBed.createComponent(AvaiRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
