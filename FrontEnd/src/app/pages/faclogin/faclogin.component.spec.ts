import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacloginComponent } from './faclogin.component';

describe('FacloginComponent', () => {
  let component: FacloginComponent;
  let fixture: ComponentFixture<FacloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
