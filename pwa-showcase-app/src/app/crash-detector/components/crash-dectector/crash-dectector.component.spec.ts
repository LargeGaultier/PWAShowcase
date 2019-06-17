import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashDectectorComponent } from './crash-dectector.component';

describe('CrashDectectorComponent', () => {
  let component: CrashDectectorComponent;
  let fixture: ComponentFixture<CrashDectectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashDectectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashDectectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
