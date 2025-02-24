import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

import { RecipesComponent } from './recipes.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { AddRecipeButtonComponent,
         AddRecipeDialog } from './forms/add/add-recipe.component';
import { EditRecipeButtonComponent,
         EditRecipeDialog } from './forms/edit/edit-recipe.component';
import { IngredientFormComponent } from './forms/ingredients/ingredient-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [
    RecipesComponent, 
    RecipeCardComponent, 
    AddRecipeButtonComponent,
    AddRecipeDialog,
    EditRecipeButtonComponent,
    EditRecipeDialog,
    IngredientFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    ApiService,
  ],
})
export class RecipeModule {}
