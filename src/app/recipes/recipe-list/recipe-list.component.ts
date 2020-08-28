import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recepe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://bit.ly/3lp2CGC')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
