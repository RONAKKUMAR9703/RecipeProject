import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
// import { Event } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy{
  ingredients: Ingredient[]
  private igChangeSub: Subscription;

  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }

  constructor(private slService:ShoppingListService){}

  ngOnInit(){
    this.ingredients=this.slService.getIngredients();
    this.igChangeSub=this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=> {
        this.ingredients=ingredients;
      }
    );
  }

  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
