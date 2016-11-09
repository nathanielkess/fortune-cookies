import { FortunesService } from './../fortunes.service';
import { Fortune } from './../Fortune';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-fortune',
  templateUrl: './edit-fortune.component.html',
  styleUrls: ['./edit-fortune.component.css']
})
export class EditFortuneComponent implements OnInit {

  currentFortune:Fortune;
  sub:Subscription
  

  constructor(private fortunesService:FortunesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.currentFortune = this.fortunesService.getFortuneById(parseInt(params['id']));
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
