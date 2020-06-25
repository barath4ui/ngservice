import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosLiveComponent } from './heros-live.component';

describe('HerosLiveComponent', () => {
  let component: HerosLiveComponent;
  let fixture: ComponentFixture<HerosLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
