import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseInvoiceNumbersComponent } from './parse-invoice-numbers.component';

describe('ParseInvoiceNumbersComponent', () => {
  let component: ParseInvoiceNumbersComponent;
  let fixture: ComponentFixture<ParseInvoiceNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseInvoiceNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseInvoiceNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
