import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteDetailComponent } from './plante-detail.component';

describe('PlanteDetailComponent', () => {
  let component: PlanteDetailComponent;
  let fixture: ComponentFixture<PlanteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
