import { Fortune } from './fortune';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FortunesService } from './fortunes.service';


describe('Service: Fortune', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FortunesService]
    });
  });


  describe('#addFortune(fortune)', () => {
    it('should add a fortune', inject([FortunesService], (service: FortunesService) => {
      
      let myFortune = new Fortune({ fortune:'This is the addFortune() test' });
      service.addFortune(myFortune)
      let actual = service.getFortuneById(1);
      let expected = myFortune;

      expect(actual).toEqual(expected);
      
    }));
  });

  describe('#getAllFortunes()', () => {

    it('should return an empty array by default', inject([FortunesService], (service: FortunesService) => {
      let actual = service.getAllFortunes();
      let expected = [];
      expect(actual).toEqual(expected);
    }));

    it('should return all todos', inject([FortunesService], (service: FortunesService) => {

      let myFortune1 = new Fortune({ fortune: 'Today will be a great day' });
      let myFortune2 = new Fortune({ fortune: 'Today will be great' });
      
      service.addFortune(myFortune1);
      service.addFortune(myFortune2);

      let actual = service.getAllFortunes();
      let expected = [myFortune1, myFortune2];

      expect(actual).toEqual(expected);
    }));

  });

  describe('#getFortuneById(number)', () => {

    it('should return a fortune with the corresponding id', inject([FortunesService], (service: FortunesService) => {

       let myFortune = new Fortune({ fortune: 'Today will be a great day' });
       service.addFortune(myFortune);

       let actual = service.getFortuneById(1);
       let expected = myFortune;

       expect(actual).toEqual(expected);

    }));

    it('should return null if no fortune is found', inject([FortunesService], (service: FortunesService) => {
      let actual = service.getFortuneById(4000);
      let expected = null;
      expect(actual).toEqual(expected);
    }));
  });

  describe('#getRandomFortune()', () => {

    it('should return a fortune', inject([FortunesService], (service: FortunesService) => {
      
      let myFortune1 = new Fortune({ fortune: 'Today will be a great day' });
      let myFortune2 = new Fortune({ fortune: 'Today will be great' });
      
      service.addFortune(myFortune1);
      service.addFortune(myFortune2);

      let actual =  service.getRandomFortune() instanceof Fortune;

    }));

    it('should return null if there are no fortunes', inject([FortunesService], (service: FortunesService) => {
      let actual = service.getRandomFortune();
      let expected = null;
      expect(actual).toEqual(expected);
    }));

  });

  describe('#updateFortuneById(number, values)', () => {    

    it('should return null if the fortune is not found', inject([FortunesService], (service: FortunesService) => {
      let actual = service.updateFortuneById(1000, {fortune: 'you will have a great day.' });
      let expected = null;
      expect(actual).toEqual(expected);
    }));

    it('should update the fortune', inject([FortunesService], (service: FortunesService) => {
      
      let myFortune1 = new Fortune({fortune: 'You will have a great day'});
      let myFortune2 = new Fortune({fortune: 'You will have a great night'});

      service.addFortune(myFortune1);
      service.addFortune(myFortune2);

      let updatedCookie = service.updateFortuneById(1, { fortune: 'Greatness ahead!'});

      let actual = updatedCookie.fortune === 'Greatness ahead!';
      let expected = true;

      expect(actual).toEqual(expected);
      
    }));

  });

  describe('#deleteFortuneById(number)', () => {    
    it('should remove the fortune with cooresponding id', inject([FortunesService], (service: FortunesService) => {
      
      let myFortune1 = new Fortune({ fortune: 'You will have a great day!' });

      service.addFortune(myFortune1);
      service.deleteFortuneById(1);

      let actual = service.getFortuneById(1);
      let expected = null;

      expect(actual).toEqual(expected);

    }));

    it('should not do anything if a fortune with a coresponding id is not found', inject([FortunesService], (service: FortunesService) => {
      
      let myFortune1 = new Fortune({ fortune: 'You will have a great day!' });
      service.addFortune(myFortune1);
      service.deleteFortuneById(2000);

      let actual = service.getFortuneById(1);
      let expected = myFortune1;

      expect(actual).toEqual(expected); 

    }));
  });


});
