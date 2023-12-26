import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductByLimitComponent } from './get-product-by-limit.component';

describe('GetProductByLimitComponent', () => {
  let component: GetProductByLimitComponent;
  let fixture: ComponentFixture<GetProductByLimitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetProductByLimitComponent]
    });
    fixture = TestBed.createComponent(GetProductByLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
