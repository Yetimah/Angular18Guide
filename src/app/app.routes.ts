import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BudgetComponent } from './budget/budget.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'App Home Page',
        component: HomeComponent,
    },
    {
        path: 'budget',
        title: 'App Budget Page',
        component: BudgetComponent,
    },


];
