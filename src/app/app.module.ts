import { Store } from '@ngrx/store';
import { CommonModule } from './common/common.module';
import { FortunesModule } from './components/fortunes/fortunes.module';
import { FortuneCookiesModule } from './components/fortune-cookies/fortune-cookies.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FortuneCookiesModule,
    FortunesModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
