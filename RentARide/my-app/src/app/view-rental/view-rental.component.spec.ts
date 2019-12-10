import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRentalComponent } from './view-rental.component';

describe('ViewRentalComponent', () => {
  let component: ViewRentalComponent;
  let fixture: ComponentFixture<ViewRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
