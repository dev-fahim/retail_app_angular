import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAddComponent } from './daily-add.component';

describe('DailyAddComponent', () => {
  let component: DailyAddComponent;
  let fixture: ComponentFixture<DailyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
