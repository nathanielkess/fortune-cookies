import { FortuneCookieComponent } from './components/fortune-cookies/fortune-cookie/fortune-cookie.component';
import { FortunesComponent } from './components/fortunes/fortunes/fortunes.component';
import { Router, RouterModule } from '@angular/router';
import { NgModule }     from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'myfortune', pathMatch: 'full' },
      { path: 'myfortune', component:FortuneCookieComponent},
    //   { path: 'fortunes', component: FortunesComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }