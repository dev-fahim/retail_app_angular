import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySalesProductDetailsComponent } from './daily-sales-product-details.component';

describe('DailySalesProductDetailsComponent', () => {
  let component: DailySalesProductDetailsComponent;
  let fixture: ComponentFixture<DailySalesProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySalesProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySalesProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
