def count_students_presents(entradas: int, saídas: int, instante: int):
    res = 0
    for i in range(len(entradas)):
        if entradas[i] <= instante <= saídas[i]:
            res += 1
    return res


# Complexidade de tempo é O(n) e de espaço é O(1)


if __name__ == "__main__":
    entradas = [1, 2, 3]
    saídas = [3, 2, 7]
    instante = 4

    print(count_students_presents(entradas, saídas, instante))
