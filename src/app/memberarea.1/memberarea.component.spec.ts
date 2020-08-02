import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberareaComponent } from './memberarea.component';

describe('MemberareaComponent', () => {
  let component: MemberareaComponent;
  let fixture: ComponentFixture<MemberareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
