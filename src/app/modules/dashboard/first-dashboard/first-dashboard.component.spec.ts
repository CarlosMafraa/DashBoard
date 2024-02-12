import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDashboardComponent } from './first-dashboard.component';

describe('FirstDashboardComponent', () => {
  let component: FirstDashboardComponent;
  let fixture: ComponentFixture<FirstDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
