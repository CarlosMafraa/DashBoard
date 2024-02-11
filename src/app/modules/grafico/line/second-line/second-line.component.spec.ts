import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLineComponent } from './second-line.component';

describe('SecondLineComponent', () => {
  let component: SecondLineComponent;
  let fixture: ComponentFixture<SecondLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
