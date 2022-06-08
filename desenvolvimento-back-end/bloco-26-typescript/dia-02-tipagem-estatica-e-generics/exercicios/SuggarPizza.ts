import Pizza from "./Pizza";
import { Sugar } from "./FlavorPizzaTypes";

interface SugarPizza extends Pizza {
	flavor: Sugar
	slices: 4
}

export default SugarPizza