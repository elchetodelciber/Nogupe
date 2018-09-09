import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [MatIconModule,  MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
  exports: [MatIconModule,  MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
})
export class MiMaterial { }