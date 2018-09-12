import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparComponent } from './repair.component';

describe('ReparComponent', () => {
  let component: ReparComponent;
  let fixture: ComponentFixture<ReparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
