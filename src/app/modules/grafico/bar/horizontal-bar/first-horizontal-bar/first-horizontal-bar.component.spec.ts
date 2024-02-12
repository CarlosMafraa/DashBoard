import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstHorizontalBarComponent } from './first-horizontal-bar.component';

describe('FirstHorizontalBarComponent', () => {
  let component: FirstHorizontalBarComponent;
  let fixture: ComponentFixture<FirstHorizontalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstHorizontalBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
