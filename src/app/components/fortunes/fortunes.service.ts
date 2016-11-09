
import { Fortune } from './fortune';
import { Injectable } from '@angular/core';

@Injectable()
export class FortunesService {

  lastId = 0;
  fortunes:Fortune[] = [];

  constructor() { }

  getAllFortunes():Fortune[] {
    return this.fortunes;
  }

  addFortune(fCookie:Fortune):FortunesService {
    if(!fCookie.id){
      fCookie.id = ++this.lastId;
    }
    this.fortunes.push(fCookie);
    return this;
  }

  getFortuneById(id:number):Fortune {
    let theFortuneCookie = this.fortunes.filter(c => c.id === id);
    if(theFortuneCookie.length > 0){
      return theFortuneCookie.pop();
    }
    else{
      return null;
    }
  }

  getRandomFortune():Fortune {
    if(this.fortunes.length < 1){
      return null;
    }
    return this.fortunes[Math.floor(Math.random()*this.fortunes.length)];
    
  }

  // updateFortuneById(id, values:Object = {}):any {

  //   let fCookie = this.getFortuneById(id);
  //   if(!fCookie){
  //     return null;
  //   }
  //   Object.assign(fCookie, values);
  //   return fCookie;
  // }'
  

  updateFortune(fortune:Fortune, values:Object = {}):any {
    Object.assign(fortune, values);
    return fortune;
  }

  deleteFortuneById(id):void {
    this.fortunes = this.fortunes.filter(c => {
      return c.id != id;
    });
  }

}
