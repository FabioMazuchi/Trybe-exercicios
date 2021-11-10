const fatorial = n => n > 1 ? n * fatorial(n - 1) : 1;

console.log(fatorial(7));