import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDoughnutComponent } from './primary-doughnut.component';

describe('PrimaryDoughnutComponent', () => {
  let component: PrimaryDoughnutComponent;
  let fixture: ComponentFixture<PrimaryDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryDoughnutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
