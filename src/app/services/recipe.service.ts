import { Injectable } from '@angular/core';

export interface IRecipes {
  id: number;
  title: string;
  description: string;
  ingredients: string;
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: IRecipes[] = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      ingredients: "spaghetti, eggs, pancetta, Parmesan cheese, black pepper, salt"
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      description: "A flavorful Indian curry made with marinated chicken in a creamy tomato sauce.",
      ingredients: "chicken, yogurt, garlic, ginger, tomato puree, cream, garam masala, chili powder, cumin, coriander"
    },
    {
      id: 3,
      title: "Vegetable Stir-Fry",
      description: "A quick and healthy dish made with fresh vegetables stir-fried in a savory sauce.",
      ingredients: "broccoli, bell peppers, carrots, soy sauce, ginger, garlic, sesame oil, corn starch"
    }
  ];


  getRecipes(): IRecipes[] {
    return this.recipes;
  }

  getSingleRecipeById(id: number): IRecipes | undefined {
    return this.recipes.find((data) => data.id === id);
  }

  addNewRecipeItem(recipe:IRecipes): void {
    this.recipes.unshift({ ...recipe, id: this.recipes.length + 1,  });
  }

  getRecipeById(id: number): IRecipes | undefined {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  updateRecipeItem(id: number, editedRecipe: IRecipes): void {
    const index = this.recipes.findIndex((recipe) => recipe.id === id);
    if (index !== -1) {
      this.recipes[index] = editedRecipe;
    }
  }

  deleteRecipeItem(id: number): void {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  }
}
