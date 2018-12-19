import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySalesNavMenuComponent } from './daily-sales-nav-menu.component';

describe('DailySalesNavMenuComponent', () => {
  let component: DailySalesNavMenuComponent;
  let fixture: ComponentFixture<DailySalesNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySalesNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySalesNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
