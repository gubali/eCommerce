import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleProductComponent } from './get-single-product.component';

describe('GetSingleProductComponent', () => {
  let component: GetSingleProductComponent;
  let fixture: ComponentFixture<GetSingleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSingleProductComponent]
    });
    fixture = TestBed.createComponent(GetSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
