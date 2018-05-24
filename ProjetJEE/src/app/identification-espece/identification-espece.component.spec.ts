import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationEspeceComponent } from './identification-espece.component';

describe('IdentificationEspeceComponent', () => {
  let component: IdentificationEspeceComponent;
  let fixture: ComponentFixture<IdentificationEspeceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificationEspeceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
