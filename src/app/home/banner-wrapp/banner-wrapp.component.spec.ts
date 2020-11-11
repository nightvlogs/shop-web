/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerWrappComponent } from './banner-wrapp.component';

describe('BannerWrappComponent', () => {
  let component: BannerWrappComponent;
  let fixture: ComponentFixture<BannerWrappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerWrappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerWrappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
