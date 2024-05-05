import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutLayoutComponent } from './out-layout.component';

describe('OutLayoutComponent', () => {
  let component: OutLayoutComponent;
  let fixture: ComponentFixture<OutLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
