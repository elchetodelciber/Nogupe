import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaInternaComponent } from './zona-interna.component';

describe('ZonaInternaComponent', () => {
  let component: ZonaInternaComponent;
  let fixture: ComponentFixture<ZonaInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
