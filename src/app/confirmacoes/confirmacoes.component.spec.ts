import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacoesComponent } from './confirmacoes.component';

describe('ConfirmacoesComponent', () => {
  let component: ConfirmacoesComponent;
  let fixture: ComponentFixture<ConfirmacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
