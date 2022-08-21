import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from "@angular/router";
import { AuthComponent } from './auth.component';
import { AlertComponent } from './alert/alert.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ResetWordComponent } from './reset-word/reset-word.component';
import {HttpClientModule} from "@angular/common/http";

export const routes = [
  {path:'', component:AuthComponent},
  {path: 'login', children:[
      {path:'', component:LoginComponent},
    ]
  },
  {path:'register',children:[
      {path: '',component:RegisterComponent},
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    AlertComponent,
    ResetWordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    AlertComponent,
  ]
})
export class AuthModule { }
