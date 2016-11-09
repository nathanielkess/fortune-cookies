import { FortunesComponent } from './fortunes/fortunes.component';
import { EditFortuneComponent } from './edit-fortune/edit-fortune.component';
import { ListFortuneComponent } from './list-fortune/list-fortune.component';
import { Router, RouterModule } from '@angular/router';
import { NgModule }     from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'fortunes/manage', pathMatch: 'full' },
      { path: 'fortunes', redirectTo: 'fortunes/manage', pathMatch: 'full' },
      { path: 'fortunes', component:FortunesComponent, children:[
          { path:'manage', component:ListFortuneComponent },
          { path:'edit/:id', component:EditFortuneComponent }
      ]},
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class FortunesRoutingModule { }