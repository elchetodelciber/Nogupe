import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-paginaderegistro',
  templateUrl: './paginaderegistro.component.html',
  styleUrls: ['./paginaderegistro.component.scss']
})
export class PaginaderegistroComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  constructor(
    public autService:AuthService
  ) { }

  ngOnInit() {
  }

  CreateUser(mail:string,pass1:string,pass2:string,dni:string){
    console.log(mail);
    if(pass1==pass2){
      this.autService.registerUser(mail, pass1)
    .then((res)=>{
      console.log('Ok');
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
    }
    
  }
}
