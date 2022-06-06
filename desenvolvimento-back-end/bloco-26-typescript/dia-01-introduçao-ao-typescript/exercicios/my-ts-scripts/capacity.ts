import exec from "./utils";
const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertCapacity(value:number, fromUnit:string, toUnit:string):number {
	const fromIndex = unitsCapacity.indexOf(fromUnit);
	const toIndex = unitsCapacity.indexOf(toUnit);
	const expoent = (toIndex - fromIndex);
	return value * Math.pow(10, expoent);
}

exec(unitsCapacity, convertCapacity);