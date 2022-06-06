import exec from "./utils";
const unitsVolumes = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume(value:number, fromUnit:string, toUnit:string):number {
	const fromIndex = unitsVolumes.indexOf(fromUnit);
	const toIndex = unitsVolumes.indexOf(toUnit);
	const expoent = (toIndex - fromIndex);

	return value * Math.pow(1000, expoent);
}

exec(unitsVolumes, convertVolume);