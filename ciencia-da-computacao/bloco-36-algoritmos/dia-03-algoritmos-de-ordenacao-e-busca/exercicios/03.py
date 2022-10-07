from random import shuffle

from classes.cronometro import Cronometro


def sort_selection(list):
    for i in range(len(list)):
        min = i
        for j in range(i + 1, len(list)):
            if list[j] < list[min]:
                min = j
        list[min], list[i] = list[i], list[min]
    return list


def sort_insertion(list):
    for i in range(len(list)):
        valor_atual = list[i]
        posição_atual = i
        while posição_atual > 0 and list[posição_atual - 1] > valor_atual:
            list[posição_atual] = list[posição_atual - 1]
            posição_atual -= 1
        list[posição_atual] = valor_atual
    return list


for algoritmo in (sort_insertion, sort_selection):
    name_algoritmo = algoritmo.__name__

    for num in (10_000, 100_000, 1_000_000):
        sorted_numbers = list(range(num))
        reverse_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]
        shuffle(random_numbers)

        with Cronometro(
            f"{name_algoritmo} com entrada ordenada de {num} números"
        ):
            algoritmo(sorted_numbers)

        with Cronometro(
            f"{name_algoritmo} com entrada inversamente ordenada de {num} números"
        ):
            algoritmo(reverse_sorted_numbers)

        with Cronometro(
            f"{name_algoritmo} com entrada aleatória de {num} números"
        ):
            algoritmo(random_numbers)
    print("#" * 60)
