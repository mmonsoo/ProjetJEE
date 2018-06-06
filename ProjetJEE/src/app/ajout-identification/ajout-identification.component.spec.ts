import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutIdentificationComponent } from './ajout-identification.component';

describe('AjoutIdentificationComponent', () => {
  let component: AjoutIdentificationComponent;
  let fixture: ComponentFixture<AjoutIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
