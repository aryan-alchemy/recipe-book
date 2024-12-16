import { Component } from '@angular/core';
import { IRecipes, RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { CommonTableComponent } from '../common/common-table/common-table.component';

@Component({
  selector: 'app-recipe-profiles',
  imports: [CommonModule, PageHeaderComponent,CommonTableComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeHomePage {
  recipes: IRecipes[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  deleteRecipeItem(id: number): void {
    if (confirm('Are you sure you want to delete this profile?')) {
      this.recipeService.deleteRecipeItem(id);
      this.recipes = this.recipeService.getRecipes();
    }
  }

  navigateToAdd(): void {
    this.router.navigate(['/add-recipe']);
  }

  navigateToEdit(id: number): void {
    this.router.navigate(['/edit-recipe', id]);
  }

  navigateToDetails(id: number): void {
    this.router.navigate([`/recipe/${id}`]);
  }
}
