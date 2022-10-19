import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { MainMaterial } from 'src/material-module';
import { FormsModule } from '@angular/forms';
import { RegisterService } from './register.service';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MainMaterial,
    FormsModule


  ],
  providers:[
    RegisterService
  ]
})
export class RegisterModule { }
