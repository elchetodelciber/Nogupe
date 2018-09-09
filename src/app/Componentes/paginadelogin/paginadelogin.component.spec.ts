import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadeloginComponent } from './paginadelogin.component';

describe('PaginadeloginComponent', () => {
  let component: PaginadeloginComponent;
  let fixture: ComponentFixture<PaginadeloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadeloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
