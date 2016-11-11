
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FortunesService } from './../fortunes.service';
import { Fortune } from './../fortune';
import { Component, OnInit } from '@angular/core';



interface AppState {
  fortune:Array<any>;
}



@Component({
  selector: 'app-list-fortune',
  templateUrl: './list-fortune.component.html',
  styleUrls: ['./list-fortune.component.css']
})
export class ListFortuneComponent implements OnInit {

  fortunesList:Observable<any>;


  constructor(private fortunesService:FortunesService, public store: Store<AppState>) { };
  
  

  ngOnInit() {
    this.fortunesList = this.store.select('fortune');
    console.log('here');
  }

  get fortunes(){
    return this.fortunesService.getAllFortunes();
  }



}
