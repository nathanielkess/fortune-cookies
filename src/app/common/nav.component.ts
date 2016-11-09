import { Component } from '@angular/core';
import { RouterModule }   from '@angular/router';

@Component({
    selector: 'app-nav',
    template:`
        <nav>
            <a [routerLink]="['/myfortune']" routerLinkActive="active">My Fortune</a> | 
            <a [routerLink]="['/fortunes']" routerLinkActive="active">Fortunes</a>
          </nav>
    `,
    styles:[`
        nav { color:#cfcfcf; background-color:#333333; padding:20px; }
    `]
})
export class NavComponent {

}