import {Ingredient} from "../shared/ingredient";
export class AddingListService {
  private items: Ingredient[] = [];
  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    //Apply this push method available on each array object to all the items specified with first argument to second argument
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }
  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}
