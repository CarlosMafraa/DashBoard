import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCombinedComponent } from './primary-combined.component';

describe('PrimaryCombinedComponent', () => {
  let component: PrimaryCombinedComponent;
  let fixture: ComponentFixture<PrimaryCombinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryCombinedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryCombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
