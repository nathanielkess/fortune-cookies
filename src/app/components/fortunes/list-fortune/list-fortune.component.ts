import { FortunesService } from './../fortunes.service';

import { Fortune } from './../fortune';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fortune',
  templateUrl: './list-fortune.component.html',
  styleUrls: ['./list-fortune.component.css']
})
export class ListFortuneComponent implements OnInit {

  
  constructor(private fortunesService:FortunesService) { }

  ngOnInit() {

  }

  get fortunes(){
    return this.fortunesService.getAllFortunes();
  }



}
