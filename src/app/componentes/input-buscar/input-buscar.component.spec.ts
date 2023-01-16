import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBuscarComponent } from './input-buscar.component';

describe('InputBuscarComponent', () => {
  let component: InputBuscarComponent;
  let fixture: ComponentFixture<InputBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
