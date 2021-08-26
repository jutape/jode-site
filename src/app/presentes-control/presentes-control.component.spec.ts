import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentesControlComponent } from './presentes-control.component';

describe('PresentesControlComponent', () => {
  let component: PresentesControlComponent;
  let fixture: ComponentFixture<PresentesControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentesControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
