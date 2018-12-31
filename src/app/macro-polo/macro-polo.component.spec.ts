import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroPoloComponent } from './macro-polo.component';

describe('MacroPoloComponent', () => {
  let component: MacroPoloComponent;
  let fixture: ComponentFixture<MacroPoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroPoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroPoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
