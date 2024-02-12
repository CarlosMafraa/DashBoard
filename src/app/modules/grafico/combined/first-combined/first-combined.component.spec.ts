import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCombinedComponent } from './first-combined.component';

describe('FirstCombinedComponent', () => {
  let component: FirstCombinedComponent;
  let fixture: ComponentFixture<FirstCombinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstCombinedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstCombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
