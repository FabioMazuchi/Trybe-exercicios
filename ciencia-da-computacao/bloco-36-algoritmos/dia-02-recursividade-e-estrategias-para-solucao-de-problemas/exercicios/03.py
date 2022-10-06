def get_max_number_aux(list, tamanho):
    if tamanho == 1:
        return list[0]
    maior = get_max_number_aux(list, tamanho - 1)
    if maior > list[tamanho - 1]:
        return maior
    return list[tamanho - 1]


def get_max_number(list):
    tamanho = len(list)
    return get_max_number_aux(list, tamanho)
