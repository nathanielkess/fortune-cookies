/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FortuneCookieComponent } from './fortune-cookie.component';

describe('FortuneCookieComponent', () => {
  let component: FortuneCookieComponent;
  let fixture: ComponentFixture<FortuneCookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortuneCookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
