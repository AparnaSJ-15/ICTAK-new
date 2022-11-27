import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-faculty-signup',
  templateUrl: './faculty-signup.component.html',
  styleUrls: ['./faculty-signup.component.css']
})
export class FacultySignupComponent implements OnInit {

  User={
    fullname:'',
    email:'',
    password:'',
    cpass:''
  }
  // loginForm:any=new FormGroup({
  //   fullName:new FormControl(null,Validators.required),
  //   email:new FormControl(null,[Validators.pattern("^[A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$",Validators.required]),
  //   password:new FormControl(null,[Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"),Validators.minLength(6),Validators.required]),
  // cpass:new FormControl(null,Validators.required)
  // })
  constructor(private router:Router) { }
  data:any=[]
  password:any
  ngOnInit(): void {
  }
  userverify(){
   
    alert('form submitted')
  }
}