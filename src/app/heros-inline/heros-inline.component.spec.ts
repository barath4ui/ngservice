import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosInlineComponent } from './heros-inline.component';

describe('HerosInlineComponent', () => {
  let component: HerosInlineComponent;
  let fixture: ComponentFixture<HerosInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
