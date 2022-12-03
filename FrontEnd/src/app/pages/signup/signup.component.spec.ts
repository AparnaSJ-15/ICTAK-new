import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:FrontEnd/src/app/pages/signup-facaulty/signup-facaulty.component.spec.ts
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
========
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
>>>>>>>> 1c20d84d951c845d8aa44be59e0b75af35c51b3f:FrontEnd/src/app/pages/signup/signup.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
