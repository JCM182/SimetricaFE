import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InLayoutComponent } from './in-layout.component';

describe('InLayoutComponent', () => {
  let component: InLayoutComponent;
  let fixture: ComponentFixture<InLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
