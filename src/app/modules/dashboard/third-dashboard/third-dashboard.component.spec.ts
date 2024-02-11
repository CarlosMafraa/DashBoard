import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdDashboardComponent } from './third-dashboard.component';

describe('ThirdDashboardComponent', () => {
  let component: ThirdDashboardComponent;
  let fixture: ComponentFixture<ThirdDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
