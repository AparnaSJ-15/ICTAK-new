import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-facaulty',
  templateUrl: './signup-facaulty.component.html',
  styleUrls: ['./signup-facaulty.component.css']
})
export class SignupFacaultyComponent implements OnInit {
  User={
    fullname:'',
    email:'',
    password:'',
    cpass:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  userverify(){
    alert('form submitted')
  }
}
