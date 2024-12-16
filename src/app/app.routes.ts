import { Routes } from '@angular/router';
import { RecipeAddComponent } from './components/recipe-add/recipe-add.component';
import { RecipeHomePage } from './components/recipes/recipe.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

export const routes: Routes = [
  {
    path: '',
    component: RecipeHomePage,
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailsComponent,
  },
  {
    path: 'add-recipe',
    component: RecipeAddComponent,
  },
  {
    path: 'edit-recipe/:id',
    component: RecipeEditComponent,
  },
];
