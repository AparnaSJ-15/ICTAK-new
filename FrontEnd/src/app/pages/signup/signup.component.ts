import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  genders: string[] = ['Male','Female','Others'];
  selected!: Date | null;
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private loginservice:LoginService, private route:Router) { }
  //only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      phonenumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]]
    });
  }
 // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
  }

}

}
