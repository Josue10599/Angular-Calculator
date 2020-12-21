import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalculatorComponent
  ],
  exports: [
    CalculatorComponent
  ],
})
export class CalculatorModule { }
