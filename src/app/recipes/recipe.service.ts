import { Recipe } from './recipe.model'

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://bit.ly/3lp2CGC'),
    new Recipe('Another tasty Recipe', 'This is simply a test recipe', 'https://bit.ly/3gJoIAb')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}