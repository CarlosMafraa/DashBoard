import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDashboardComponent } from './primary-dashboard.component';

describe('PrimaryDashboardComponent', () => {
  let component: PrimaryDashboardComponent;
  let fixture: ComponentFixture<PrimaryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
