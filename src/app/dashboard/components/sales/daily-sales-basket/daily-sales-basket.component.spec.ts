import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySalesBasketComponent } from './daily-sales-basket.component';

describe('DailySalesBasketComponent', () => {
  let component: DailySalesBasketComponent;
  let fixture: ComponentFixture<DailySalesBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySalesBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySalesBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
