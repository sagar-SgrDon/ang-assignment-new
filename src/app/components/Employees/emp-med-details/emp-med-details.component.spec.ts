import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMedDetailsComponent } from './emp-med-details.component';

describe('EmpMedDetailsComponent', () => {
  let component: EmpMedDetailsComponent;
  let fixture: ComponentFixture<EmpMedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpMedDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpMedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
