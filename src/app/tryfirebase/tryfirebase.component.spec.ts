import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryfirebaseComponent } from './tryfirebase.component';

describe('TryfirebaseComponent', () => {
  let component: TryfirebaseComponent;
  let fixture: ComponentFixture<TryfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
