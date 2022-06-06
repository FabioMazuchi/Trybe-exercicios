import exec from './utils';
const unitsArea = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convertArea(value:number, fromUnit:string, toUnit:string):number {
	const fromIdex = unitsArea.indexOf(fromUnit);
	const toIdex = unitsArea.indexOf(toUnit);
	const expoent = (toIdex - fromIdex);
	
	return value * Math.pow(100, expoent);
}

exec(unitsArea, convertArea);
