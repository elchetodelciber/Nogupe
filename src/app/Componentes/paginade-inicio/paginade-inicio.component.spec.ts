import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadeInicioComponent } from './paginade-inicio.component';

describe('PaginadeInicioComponent', () => {
  let component: PaginadeInicioComponent;
  let fixture: ComponentFixture<PaginadeInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadeInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadeInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
