import { FortunesService } from './../fortunes.service';
import { Fortune } from './../fortune';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fortune',
  templateUrl: './add-fortune.component.html',
  styleUrls: ['./add-fortune.component.css']
})
export class AddFortuneComponent implements OnInit {

  newFortune:Fortune = new Fortune();

  constructor(private fortunesService:FortunesService) { }

  ngOnInit() {
  }

  addFortune(){
    this.fortunesService.addFortune(this.newFortune);
    this.newFortune = new Fortune();
  }

}
