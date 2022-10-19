import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CrudService} from './crud.service'


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  firstName='';

  constructor(private fb:FormBuilder,private _crudservice:CrudService) { }
registrationForm=this.fb.group({
firstName:['',[Validators.required,Validators.minLength(3)]],
lastName:['',Validators.required],
address:this.fb.group({
  city:[''],
  state:['']
})
})
  ngOnInit(): void {}

  Loadapi(){
    this.registrationForm.setValue({
      firstName:'Prem',
      lastName:'Kumar',
      address:{
        city:'Piduguralla',
        state:'AP'
      }
    })
  }
  
  Clearapi(){
    this.registrationForm.reset()

  }

  onSubmit(){
    this._crudservice.register(this.registrationForm.value)
    .subscribe(
      response=>console.log("Sucess",response),
      error=>console.log("error",error)
    );
    this.registrationForm.reset()

  }


}
