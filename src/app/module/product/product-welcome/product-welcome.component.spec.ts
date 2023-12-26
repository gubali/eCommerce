import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWelcomeComponent } from './product-welcome.component';

describe('ProductWelcomeComponent', () => {
  let component: ProductWelcomeComponent;
  let fixture: ComponentFixture<ProductWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductWelcomeComponent]
    });
    fixture = TestBed.createComponent(ProductWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
