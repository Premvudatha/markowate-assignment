import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudangularRoutingModule } from './crudangular-routing.module';
import { CrudangularComponent } from './crudangular.component';
import { MainMaterial } from 'src/material-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudangularComponent
  ],
  imports: [
    CommonModule,
    CrudangularRoutingModule,
    MainMaterial,
    ReactiveFormsModule
  ]
})
export class CrudangularModule { }
