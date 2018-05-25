import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteComponent } from './plante.component';

describe('PlanteComponent', () => {
  let component: PlanteComponent;
  let fixture: ComponentFixture<PlanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
