import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { RestoService } from '../service/resto.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  alert:boolean=false
  loginResto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),

  });
  constructor(private resto:RestoService){}
  collectResto(){

    this.resto.saveResto(this.loginResto.value).subscribe((result:any): void=>{
    this.alert=true
    });
    this.loginResto.reset({})
  }
  closeAlert(){
    this.alert=false
  }
  
}
