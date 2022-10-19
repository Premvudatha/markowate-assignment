import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, ReactiveFormsModule ,} from '@angular/forms';

import { CrudComponent } from './crud.component';
import { MainMaterial } from 'src/material-module';
import { CrudRoutingModule } from './crud-routing.module';


@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    MainMaterial,
    CrudRoutingModule,
    ReactiveFormsModule

  ]
})
export class CrudModule { }
