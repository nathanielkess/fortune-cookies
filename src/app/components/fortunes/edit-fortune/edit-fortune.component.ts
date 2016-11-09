import { FortunesService } from './../fortunes.service';
import { Fortune } from './../fortune';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-fortune',
  templateUrl: './edit-fortune.component.html',
  styleUrls: ['./edit-fortune.component.css']
})
export class EditFortuneComponent implements OnInit {

  test:string;
  currentFortune:Fortune;
  sub:Subscription
  

  constructor(private fortunesService:FortunesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.currentFortune = this.fortunesService.getFortuneById(parseInt(params['id']));
      this.test = "hello";
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  updateFortune(form:NgForm){
    this.fortunesService.updateFortune(this.currentFortune, { fortune:form.value['fortuneValue']} );
  }

}
