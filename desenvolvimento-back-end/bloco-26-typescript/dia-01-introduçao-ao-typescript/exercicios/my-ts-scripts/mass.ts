import exec from './utils';
const unitsWheight = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass(value:number, fromUnit:string, toUnit:string): number {
	const fromIndex = unitsWheight.indexOf(fromUnit);
	const toIndex = unitsWheight.indexOf(toUnit);
	const expoent = (toIndex - fromIndex);
	
	return value * Math.pow(10, expoent);
}

exec(unitsWheight, convertMass);