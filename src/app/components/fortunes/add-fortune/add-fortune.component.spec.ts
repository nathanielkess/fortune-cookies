import { FormsModule } from '@angular/forms';
import { FortunesService } from './../fortunes.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddFortuneComponent } from './add-fortune.component';

describe('AddFortuneComponent', () => {
  let component: AddFortuneComponent;
  let fixture: ComponentFixture<AddFortuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AddFortuneComponent 
      ],
      imports:[
        FormsModule
      ],
      providers:[
        FortunesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFortuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
