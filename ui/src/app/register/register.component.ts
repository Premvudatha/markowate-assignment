import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: any;

  constructor(private registerservice:RegisterService) { }

  ngOnInit(): void {
  }
  registerUser(user: any){
    // console.log(user)
    this.registerservice.registerUser(user).subscribe(
      response=>console.log("Sucess",response),
      error=>console.log("error",error)
    );

  }

}
