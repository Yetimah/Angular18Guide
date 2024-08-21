import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UtilityService {

    budgetTypes = ['house', 'rent', 'vacation']
    ingredientList = [
        { name: 'noodles', quantity: 1 },
        { name: 'miso broth', quantity: 1 },
        { name: 'egg', quantity: 2 },
    ];


    getAllBudgetTypes(): string[] {
        return this.budgetTypes
    }

    getIngredientList() {
        return this.ingredientList
    }
}