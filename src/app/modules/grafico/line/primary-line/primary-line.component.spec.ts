import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryLineComponent } from './primary-line.component';

describe('PrimaryLineComponent', () => {
  let component: PrimaryLineComponent;
  let fixture: ComponentFixture<PrimaryLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
