import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FortunesService } from './../fortunes.service';
import { EditFortuneComponent } from './../edit-fortune/edit-fortune.component';
import { AddFortuneComponent } from './../add-fortune/add-fortune.component';
import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListFortuneComponent } from './list-fortune.component';

describe('ListFortuneComponent', () => {
  let component: ListFortuneComponent;
  let fixture: ComponentFixture<ListFortuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ListFortuneComponent,
        AddFortuneComponent
      ],
      imports: [
        FormsModule,
        RouterModule
      ],
      providers:[
        FortunesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFortuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
