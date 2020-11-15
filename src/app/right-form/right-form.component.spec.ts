import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightFormComponent } from './right-form.component';

describe('RightFormComponent', () => {
  let component: RightFormComponent;
  let fixture: ComponentFixture<RightFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
