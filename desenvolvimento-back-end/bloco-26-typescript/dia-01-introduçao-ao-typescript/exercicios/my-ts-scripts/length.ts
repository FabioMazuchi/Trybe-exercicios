const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(value:number, fromUnit:string, toUnit:string): number {
	const fromIndex = units.indexOf(fromUnit);
	const toIndex = units.indexOf(toUnit);
	const expoent = (toIndex - fromIndex);
	const result = value * Math.pow(10, expoent);
	
	return result;
} 

console.log(convert(23, 'km', 'dam'));
