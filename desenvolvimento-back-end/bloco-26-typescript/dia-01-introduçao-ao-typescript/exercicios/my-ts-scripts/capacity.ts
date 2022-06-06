const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertCapacity(value:number, fromUnit:string, toUnit:string):number {
	const fromIndex = unitsCapacity.indexOf(fromUnit);
	const toIndex = unitsCapacity.indexOf(toUnit);
	const expoent = (toIndex - fromIndex);
	const result = value * Math.pow(10, expoent);
	
	return result;
}

console.log(`28dal equivale à ${convertCapacity(28, 'dal', 'dl')}dl`);
