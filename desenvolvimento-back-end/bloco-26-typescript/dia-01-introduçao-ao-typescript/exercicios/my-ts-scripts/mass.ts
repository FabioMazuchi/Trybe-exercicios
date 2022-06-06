const unitsWheight = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass(value:number, fromUnit:string, toUnit:string): number {
	const fromIndex = unitsWheight.indexOf(fromUnit);
	const toIndex = unitsWheight.indexOf(toUnit);
	const expoent = (toIndex - fromIndex);
	const result = value * Math.pow(10, expoent);

	return result;
}

console.log(`35g equivale à ${convertMass(35, 'g', 'mg')}mg`);
