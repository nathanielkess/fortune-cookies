import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FortuneCookieComponent } from './fortune-cookie/fortune-cookie.component';


@NgModule({
  declarations: [
    FortuneCookieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  exports: [
    
  ]
})
export class FortuneCookiesModule { }