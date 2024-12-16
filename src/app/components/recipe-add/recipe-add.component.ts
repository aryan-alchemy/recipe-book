import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { PageHeaderComponent } from '../common/page-header/page-header.component';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PageHeaderComponent], // Add ReactiveFormsModule here
})
export class RecipeAddComponent implements OnInit {
  recipeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
        ],
      ],
      description: ['', [Validators.required]],
      ingredients: ['', [Validators.required]],
    });
  }

  get title() {
    return this.recipeForm.get('title');
  }

  get description() {
    return this.recipeForm.get('description');
  }

  get ingredients() {
    return this.recipeForm.get('ingredients');
  }

  save(): void {
    if (this.recipeForm.valid) {
      this.recipeService.addNewRecipeItem(this.recipeForm.value);
      this.router.navigate(['/']);
    } else {
      console.log("inside main component!");
      
      window.alert("* fields are Required!")
    }
  }
}
