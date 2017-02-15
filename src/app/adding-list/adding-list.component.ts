import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {AddingListService} from "./adding-list.service";

@Component({
  selector: 'app-adding-list',
  templateUrl: './adding-list.component.html'
})
export class AddingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(private als: AddingListService) { }

  ngOnInit() {
    this.items = this.als.getItems()
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }
  onCleared() {
    this.selectedItem = null;
  }

}

