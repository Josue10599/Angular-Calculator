import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../service';

/**
 * Componente da calculadora, responsável por criar a interface e se comunicar com o serviço.
 * @author Josue Lopes
 * @since 0.1
 */
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private calculatorService: CalculatorService) { }

  private result: string = '0';
  private value1: string = '';
  private value2: string = '';
  private valueOperation: string = '';

  ngOnInit(): void {
    this.clear()
  }

  /**
   * Adiciona o número seleciona ao cálculo.
   * @param value Novo valor selecionado.
   */
  addNumber(value: string): void {
    if (this.valueOperation == '') this.value1 = this.concatNumber(this.value1, value);
    else this.value2 = this.concatNumber(this.value2, value);
  }

  /**
   * Seta o valor da operação, se o segundo valor já estiver selecionado 
   * realiza a operação e coloca o valor padrão como primeiro valor.
   * @param value Valor da operação selecionada.
   */
  operation(value: string): void {
    if (this.valueOperation == '') {
      if (this.value1 == '' && this.result == '0') return;
      else if (this.value1 == '') this.value1 = this.result.toString();
      this.valueOperation = value;
      return;
    }
    if (this.value2.length > 0) {
      this.result = this.calculatorService.calculate(parseFloat(this.value1), parseFloat(this.value2), this.valueOperation).toString();
      this.value1 = this.result.toString();
      this.value2 = '';
    }
  }

  /**
   * Limpa os valores da operação.
   */
  clear() {
    this.result = '0';
    this.value1 = '';
    this.value2 = '';
    this.valueOperation = '';
  }

  /**
   * Realiza o calculo com os valores e as operações selecionadas pelo usuário.
   */
  calculate(): void {
    if (this.value2 == '') return;
    this.result = this.calculatorService.calculate(parseFloat(this.value1), parseFloat(this.value2), this.valueOperation).toString();
    this.value1 = '';
    this.value2 = '';
    this.valueOperation = '';
  }

  /**
   * Concatena a sequência de número selecionados pelo usuário e retorna a 
   * sequência correta.
   * @param currentValue Valor atual.
   * @param concatValue Novo valor para concatenação.
   * @return Retorna o texto concatenado.
   */
  private concatNumber(currentValue: string, concatValue: string): string {
    if (concatValue == '0' && currentValue.length == 0) currentValue = '';
    if (concatValue == '.' && currentValue == '') return '0.';
    if (concatValue == '.' && currentValue.indexOf('.') > -1) return currentValue;
    return currentValue + concatValue;
  }

  get displayValue(): string {
    if (this.value2.length > 0) return this.value2
    else if (this.value1.length > 0) return this.value1;
    else return this.result;
  }
}
