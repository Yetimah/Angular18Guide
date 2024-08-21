import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilityService } from '../services/utility.service';
import { DecimalPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { StarPipe } from '../pipes/star.pipe';
import { RandomPipe } from '../pipes/random.pipe';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [FormsModule, DecimalPipe, LowerCasePipe, UpperCasePipe, StarPipe, RandomPipe],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {
  budgetType = '';
  budgetAmount = '';
  intendedNumofYears = 0;
  totalAmount = '';
  budgetTypes = '';
  randomValue = 'kllk;';
  ingredientList: { name: string, quantity: number }[] = [];

  //-- inject based dependency injection
  // utilityService = inject(UtilityService);

  //--constructor based dependency injection
  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.budgetTypes = this.utilityService.getAllBudgetTypes().join();
    this.ingredientList = this.utilityService.getIngredientList();
    // this.randomValue =this.randomPipe.transform();
  }

  calculateEstimatedOverallAmount() {
    console.log("in calculateEstimatedOverallAmount method");
    console.log(this.budgetAmount);
    console.log(this.intendedNumofYears);

    this.totalAmount = (parseInt(this.budgetAmount) * this.intendedNumofYears).toString();
    console.log(this.totalAmount);
    // this.getRandomValues(this.totalAmount);
  }

  getListofIngredients() {
    this.ingredientList = this.utilityService.getIngredientList();
  }

  // getRandomValues(value: string) {
  //   this.randomValue = this.randomPipe.transform(value);
  //   console.log(this.randomValue);
  //   return this.randomValue;
  // }

}

