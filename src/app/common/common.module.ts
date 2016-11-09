import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,   
    RouterModule 
  ],
  providers: [],
  exports:[
    NavComponent
  ]
})
export class CommonModule { }
