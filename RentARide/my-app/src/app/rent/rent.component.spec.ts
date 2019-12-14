import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RentComponent } from './rent.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

describe('RentComponent', () => {
  let component: RentComponent;
  let fixture: ComponentFixture<RentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
