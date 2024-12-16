import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService, IRecipes } from '../../services/recipe.service';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss',
  standalone: true,
})
export class RecipeDetailsComponent implements OnInit {
  recipe: IRecipes | null | undefined = null;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipe = this.recipeService.getRecipeById(+id); // Replace with actual service call.
    }
  }

  get title() {
    return `${this.recipe?.title} Recipe Details`
  }
}
