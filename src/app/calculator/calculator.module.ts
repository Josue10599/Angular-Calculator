import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components';
import { CalculatorService } from './service';

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
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
