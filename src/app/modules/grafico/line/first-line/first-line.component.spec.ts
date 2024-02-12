import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLineComponent } from './first-line.component';

describe('FirstLineComponent', () => {
  let component: FirstLineComponent;
  let fixture: ComponentFixture<FirstLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
