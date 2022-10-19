import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudangularService } from './crudangular.service';
interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crudangular',
  templateUrl: './crudangular.component.html',
  styleUrls: ['./crudangular.component.css']
})

export class CrudangularComponent implements OnInit {

  items:any;
  registrationForm:any;
  item: any;
  indexselectedtoEdit: any;
// 



  title = 'SampleProject';
  locations: Location[] = [
    {value: 'chennai', viewValue: 'Chennai'},
    {value: 'bengalore', viewValue: 'Bengalore'},
    {value: 'hyderabad', viewValue: 'Hyderabad'},
  ];
  cd: any;
  isedit=false;
i: any;



  constructor(private fb:FormBuilder,private crudangularservice:CrudangularService
    ) {
      this.items=[];
      this.registrationForm=this.fb.group({
        fullName:['',[Validators.required,Validators.minLength(3)]],
        mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
        emailId:['',[Validators.required,Validators.email]],
        jobType:['',Validators.required],
        dob:['',Validators.required],
        prefLocation:['',Validators.required],
     })


}


  ngOnInit(): void {
this.loadData()
  }

  onSubmit(){
    this.items.push(this.registrationForm.value); 

    this.crudangularservice.addData(this.registrationForm.value)
    .subscribe(
      response=>console.log("Sucess",response),
      error=>console.log("error",error)
    );
    this.registrationForm.reset()

  }

  delete(data: any,index: any){
// this.items.forEach((value: any,index: any)=>{
  // if(value==element)
  this.crudangularservice.deleteData(data._id).subscribe(res=>{
    console.log('delete',res)
  })
    this.items.splice(index,1)
  
 
  }
  onedit(index: any){
    this.isedit=true;
    this.registrationForm.patchValue(this.items[index]);
    this.indexselectedtoEdit=index
  }
  onSave(){
    
this.items.splice(this.indexselectedtoEdit,1);
this.items.push(this.registrationForm.value); 
this.registrationForm.reset()
this.isedit=false;


  }
  loadData(){
    this.crudangularservice.getData().subscribe(res=>{
      Object.values(res).forEach(datafromdb=>{
        this.items.push(datafromdb)
      })
      // console.log(res);
    })

  }
 
}
