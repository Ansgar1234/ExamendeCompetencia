import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej1Component } from './ej1.component';

describe('Ej1Component', () => {
  let component: Ej1Component;
  let fixture: ComponentFixture<Ej1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
