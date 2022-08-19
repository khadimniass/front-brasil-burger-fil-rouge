import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from "@angular/router";
import { AuthComponent } from './auth.component';
import { AlertComponent } from './alert/alert.component';
import {ReactiveFormsModule} from "@angular/forms";

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
