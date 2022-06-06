const unitsVolumes = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume(value:number, fromUnit:string, toUnit:string):number {
	const fromIndex = unitsVolumes.indexOf(fromUnit);
	const toIndex = unitsVolumes.indexOf(toUnit);
	const expoent = (toIndex - fromIndex);

	return value * Math.pow(1000, expoent);
}

console.log(`80hm³ equivale a ${convertVolume(80, 'hm³', 'm³')}m³`);
