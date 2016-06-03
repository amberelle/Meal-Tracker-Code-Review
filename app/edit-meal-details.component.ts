import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `

    <div class="meal-form">
      <h3>Edit:  {{ meal.food }}</h3>
      <div class="row">
      <h4>food:<input [(ngModel)]="meal.food" class="col-sm-3 input-lg meal-form"/></h4>
      <h4>details:<input [(ngModel)]="meal.details" class="col-sm-3 input-lg meal-form"/></h4>
      <h4>Calories:<input [(ngModel)]="meal.calories" class="col-sm-3 input-lg meal-form"/></h4>
      </div>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
