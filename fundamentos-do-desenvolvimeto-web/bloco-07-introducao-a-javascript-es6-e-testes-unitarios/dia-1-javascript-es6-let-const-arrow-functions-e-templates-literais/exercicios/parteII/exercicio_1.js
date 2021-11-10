const n = 4;

const fatoral = n => {
	let res = 1;

	for (let i = 2; i <= n; i += 1) {
		res *= i;
	}
	return res
}

console.log(fatoral(4));