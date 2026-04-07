import { Component } from '@angular/core';
import { InvesmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvesmentService){}

  get results() {
    return this.investmentService.resultData;
  }
}
