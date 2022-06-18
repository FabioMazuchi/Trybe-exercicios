export function validDate(dia: string, mes: string, ano: string): Boolean {
	if (Number(dia) <= 0 || Number(mes) <= 0 || Number(ano) < 1900) return true;
	return false;
}