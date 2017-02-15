import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {AddingListService} from "./adding-list.service";

@Component({
  selector: 'app-adding-list-add',
  templateUrl: './adding-list-add.component.html'
})
export class AddingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;
  constructor(private als: AddingListService) { }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.als.editItem(this.item, newIngredient);
      this.onClear();
    } else {
      this.item = newIngredient;
      this.als.addItem(this.item);
    }
  }
  onDelete() {
    this.als.deleteItem(this.item);
    this.onClear();
  }
  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
