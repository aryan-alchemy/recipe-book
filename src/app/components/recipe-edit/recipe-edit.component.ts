import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipes, RecipeService } from '../../services/recipe.service';
import { PageHeaderComponent } from '../common/page-header/page-header.component';
@Component({
  selector: 'app-recipe-edit',
  imports: [CommonModule, FormsModule, PageHeaderComponent],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss',
})
export class RecipeEditComponent {
  recipeId: any;
  recipeDetails: IRecipes | undefined;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id') || '0';
    this.recipeDetails = this.recipeService.getRecipeById(Number(this.recipeId));
  }

  save(): void {
    this.recipeService.updateRecipeItem(this.recipeId,this.recipeDetails as IRecipes);
    this.router.navigate(['/']);
  }

  get title() {
    return `Edit ${this.recipeDetails?.title}`
  }
}
