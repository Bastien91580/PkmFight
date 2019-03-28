import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnnemieComponent } from './ennemie.component';

describe('EnnemieComponent', () => {
  let component: EnnemieComponent;
  let fixture: ComponentFixture<EnnemieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnnemieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnnemieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
