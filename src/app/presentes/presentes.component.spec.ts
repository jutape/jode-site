import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentesComponent } from './presentes.component';

describe('PresentesComponent', () => {
  let component: PresentesComponent;
  let fixture: ComponentFixture<PresentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
