import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGallaryComponent } from './product-gallary.component';

describe('ProductGallaryComponent', () => {
  let component: ProductGallaryComponent;
  let fixture: ComponentFixture<ProductGallaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGallaryComponent]
    });
    fixture = TestBed.createComponent(ProductGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
