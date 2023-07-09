import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVarificationComponent } from './otp-varification.component';

describe('OtpVarificationComponent', () => {
  let component: OtpVarificationComponent;
  let fixture: ComponentFixture<OtpVarificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpVarificationComponent]
    });
    fixture = TestBed.createComponent(OtpVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
