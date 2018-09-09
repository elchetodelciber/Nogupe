import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaderegistroComponent } from './paginaderegistro.component';

describe('PaginaderegistroComponent', () => {
  let component: PaginaderegistroComponent;
  let fixture: ComponentFixture<PaginaderegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaderegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaderegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
