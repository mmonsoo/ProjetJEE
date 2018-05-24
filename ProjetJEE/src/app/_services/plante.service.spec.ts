import { TestBed, inject } from '@angular/core/testing';

import { PlanteService } from './plante.service';

describe('PlanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanteService]
    });
  });

  it('should be created', inject([PlanteService], (service: PlanteService) => {
    expect(service).toBeTruthy();
  }));
});
