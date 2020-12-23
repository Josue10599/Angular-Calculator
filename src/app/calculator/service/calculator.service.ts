import { Injectable } from '@angular/core';

/**
 * Serviço responsável por executar as operações da calculadora.
 * @author Josue Lopes
 * @since 0.1
 */
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly PLUS: string = '+';
  static readonly MINUS: string = '-';
  static readonly DIVIDER: string = '/';
  static readonly MULTIPLICATION: string = 'X';

  constructor() { }

  /**
   * Método que calcula a operação matemática passada por parâmetro, se o valor 
   * não for valido será retornado 0 por padrão.
   * @param value1 Primeiro valor.
   * @param value2 Segundo valor.
   * @param operation Operação.
   * @returns Resultado do calculo.
   */
  calculate(value1: number, value2: number, operation: string): number {
    let result = 0;
    switch (operation) {
      case CalculatorService.PLUS: result = value1 + value2;
        break;
      case CalculatorService.MINUS: result = value1 - value2;
        break;
      case CalculatorService.DIVIDER: result = value1 / value2;
        break;
      case CalculatorService.MULTIPLICATION: result = value1 * value2;
        break;
      default: result = 0;
    }
    return result;
  }
}
