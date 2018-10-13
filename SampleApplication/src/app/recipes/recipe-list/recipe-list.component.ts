import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('chicken biriyani','Boil the chicken','http://www.freedigitalphotos.net/images/previews/gourmet-cheese-burgers-100388230.jpg'),
    new Recipe('mutton biriyani','chop the mutton pieces','https://i.ytimg.com/vi/HI2-u2zu8Ss/maxresdefault.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
