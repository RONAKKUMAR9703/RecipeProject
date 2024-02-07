import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{

    // recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20)
            ]
            ),
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20)
            ]
            )
    
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}