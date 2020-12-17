import { TestBed } from '@angular/core/testing';

import { EstudianteServicioService } from './estudiante-servicio.service';

describe('EstudianteServicioService', () => {
  let service: EstudianteServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudianteServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
