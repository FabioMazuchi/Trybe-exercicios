import Pizza from "./Pizza";
import { Vegetarian } from "./FlavorPizzaTypes";

interface VegetarianPizza extends Pizza {
	flavor: Vegetarian
}

export default VegetarianPizza