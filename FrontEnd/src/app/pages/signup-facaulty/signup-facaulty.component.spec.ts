import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFacaultyComponent } from './signup-facaulty.component';

describe('SignupFacaultyComponent', () => {
  let component: SignupFacaultyComponent;
  let fixture: ComponentFixture<SignupFacaultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFacaultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFacaultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
