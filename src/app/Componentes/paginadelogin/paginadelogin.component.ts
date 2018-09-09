import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-paginadelogin',
  templateUrl: './paginadelogin.component.html',
  styleUrls: ['./paginadelogin.component.scss']

})
export class PaginadeloginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  constructor() { }

  
  ngOnInit() {
  }

}

