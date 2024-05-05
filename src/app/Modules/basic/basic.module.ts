import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,MatInputModule ,ReactiveFormsModule,MatFormFieldModule,MatButtonModule
  ],
  exports:[
     CommonModule,FormsModule,MatInputModule ,ReactiveFormsModule,MatFormFieldModule,MatButtonModule
  ]
})
export class BasicModule { }
