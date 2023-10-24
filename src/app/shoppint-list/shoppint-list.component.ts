import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppint-list',
  templateUrl: './shoppint-list.component.html',
  styleUrls: ['./shoppint-list.component.css']
})
export class ShoppintListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  constructor() {}

  ngOnInit(): void {
      
  }
}
