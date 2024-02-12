import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstVerticalBarComponent } from './first-vertical-bar.component';

describe('FirstVerticalBarComponent', () => {
  let component: FirstVerticalBarComponent;
  let fixture: ComponentFixture<FirstVerticalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstVerticalBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstVerticalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
