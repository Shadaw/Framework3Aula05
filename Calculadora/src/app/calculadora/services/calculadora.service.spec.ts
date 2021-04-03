import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 10 + 5 = 15',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(10, 5, CalculadoraService.SOMA);
      expect(soma).toEqual(15);
    })
  )

  it('Deve garantir que 10 - 5 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(10, 5, CalculadoraService.SUBTRACAO);
      expect(soma).toEqual(5);
    })
  )

  it('Deve garantir que 10 x 5 = 50',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(10, 5, CalculadoraService.MULTIPLICACAO);
      expect(soma).toEqual(50);
    })
  )

  it('Deve garantir que 10 / 5 = 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(10, 5, CalculadoraService.DIVISAO);
      expect(soma).toEqual(2);
    })
  )

});
