import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsView2Component } from './cats-view2.component';

describe('CatsView2Component', () => {
  let component: CatsView2Component;
  let fixture: ComponentFixture<CatsView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsView2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
