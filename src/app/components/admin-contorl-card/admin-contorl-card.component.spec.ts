import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContorlCardComponent } from './admin-contorl-card.component';

describe('AdminContorlCardComponent', () => {
  let component: AdminContorlCardComponent;
  let fixture: ComponentFixture<AdminContorlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContorlCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContorlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
