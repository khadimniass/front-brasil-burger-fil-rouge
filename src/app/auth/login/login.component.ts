import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // loginForm!: FormGroup;
  loading = false;
  submitted = false;
  myForm = new FormGroup({
    login:new FormControl(''),
    password:new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService:AuthentificationService
  ){}

  ngOnInit(): void {

  }

  login() {
   // console.log(this.myForm.value)
    this.authenticationService.login(this.myForm.value)
  }
}
