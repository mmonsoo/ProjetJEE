import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePlantesComponent } from './liste-plantes.component';

describe('ListePlantesComponent', () => {
  let component: ListePlantesComponent;
  let fixture: ComponentFixture<ListePlantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePlantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePlantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
