import { NgForm, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FortunesService } from './../fortunes.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EditFortuneComponent } from './edit-fortune.component';

describe('EditFortuneComponent', () => {
  let component: EditFortuneComponent;
  let fixture: ComponentFixture<EditFortuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        EditFortuneComponent 
      ],
      imports:[
        RouterTestingModule,
        FormsModule
      ],
      providers:[
        FortunesService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFortuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
