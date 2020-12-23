import { inject, TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Plus', inject([CalculatorService], (service: CalculatorService) => {
    let result = service.calculate(1, 1, '+');
    expect(result).toEqual(2);
  }));

  it('Plus static', inject([CalculatorService], (service: CalculatorService) => {
    let result = service.calculate(1, 1, CalculatorService.PLUS);
    expect(result).toEqual(2);
  }));

  it('Minus', inject([CalculatorService], (service: CalculatorService) => {
    let result = service.calculate(1, 2, '-');
    expect(result).toEqual(-1);
  }));

  it('Minus static', inject([CalculatorService], (service: CalculatorService) => {
    let result = service.calculate(1, 2, CalculatorService.MINUS);
    expect(result).toEqual(-1);
  }));

  it('Multiplicate', inject([CalculatorService], (service: CalculatorService) => {
    let result = service.calculate(2, 2, 'X');
    expect(result).toEqual(4);
  }));

  it('Multiplicate static', inject([CalculatorService], (service: CalculatorService) => {
    let result = service.calculate(2, 2, CalculatorService.MULTIPLICATION);
    expect(result).toEqual(4);
  }));

  it('Divide', inject([CalculatorService], (service: CalculatorService) => {
    let result = service.calculate(8, 2, '/');
    expect(result).toEqual(4);
  }));

  it('Divide static', inject([CalculatorService], (service: CalculatorService) => {
    let result = service.calculate(8, 2, CalculatorService.DIVIDER);
    expect(result).toEqual(4);
  }));
});
