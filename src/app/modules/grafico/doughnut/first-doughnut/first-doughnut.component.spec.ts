import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDoughnutComponent } from './first-doughnut.component';

describe('FirstDoughnutComponent', () => {
  let component: FirstDoughnutComponent;
  let fixture: ComponentFixture<FirstDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstDoughnutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
