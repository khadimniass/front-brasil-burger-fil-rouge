import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification.service";
import {AlertService} from "../services/alert.service";
import Swal from "sweetalert2";
import {first} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService:AuthentificationService,
    private alertService:AlertService
  ){
    if (this.authenticationService.currentUser){
      this.router.navigate(['/']);
      Swal.fire({
        html:'already connected'
      });
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password: ['', Validators.required]
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.loginForm.invalid){
      Swal.fire({
        html:'invalid cridentials',
        icon : 'error'
      })
      return ;
    }
    this.loading = true
    this.authenticationService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe(data=>{
        this.router.navigate([this.returnUrl]);
      },
      error=>{
        this.alertService.error(error);
        this.loading = false

    });
  }
}
