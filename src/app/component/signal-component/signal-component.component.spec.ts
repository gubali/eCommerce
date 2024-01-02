import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalComponentComponent } from './signal-component.component';

describe('SignalComponentComponent', () => {
  let component: SignalComponentComponent;
  let fixture: ComponentFixture<SignalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalComponentComponent]
    });
    fixture = TestBed.createComponent(SignalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
