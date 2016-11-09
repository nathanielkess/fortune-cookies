import { FortunesService } from './fortunes.service';
import { FortunesRoutingModule } from './fortunes-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddFortuneComponent } from './add-fortune/add-fortune.component';
import { EditFortuneComponent } from './edit-fortune/edit-fortune.component';
import { ListFortuneComponent } from './list-fortune/list-fortune.component';
import { FortunesComponent } from './fortunes/fortunes.component';


@NgModule({
  declarations: [
    AddFortuneComponent,
    EditFortuneComponent,
    ListFortuneComponent,
    FortunesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FortunesRoutingModule
  ],
  providers: [
    FortunesService
  ],
  exports: [
    AddFortuneComponent,
    EditFortuneComponent,
    ListFortuneComponent,
    FortunesComponent
  ]
})
export class FortunesModule { }
