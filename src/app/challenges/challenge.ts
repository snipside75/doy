import {Ingredient} from "../shared/ingredient";
export class Challenge {

    constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[] ) {
    }
}
