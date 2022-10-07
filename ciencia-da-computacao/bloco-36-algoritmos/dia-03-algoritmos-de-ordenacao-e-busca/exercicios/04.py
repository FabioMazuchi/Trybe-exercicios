from random import shuffle

from classes.cronometro import Cronometro


def sort_bubble(list):
    trocou = True
    num_iterações = 0

    while trocou:
        trocou = False

        for i in range(len(list) - num_iterações - 1):
            if list[i] > list[i + 1]:
                list[i], list[i + 1] = list[i + 1], list[i]
                trocou: True
        num_iterações += 1
    return list


def sort_merge(list):
    if len(list) <= 1:
        return list

    mid = len(list) // 2
    left, right = sort_merge(list[:mid]), sort_merge(list[mid:])
    return merge(left, right, list.copy())


def merge(left, right, merged):
    l_cursor, r_cursor = 0, 0

    while l_cursor < len(left) and r_cursor < len(right):
        if left[l_cursor] <= right[r_cursor]:
            merged[l_cursor + r_cursor] = left[l_cursor]
            l_cursor += 1
        else:
            merged[l_cursor + r_cursor] = right[r_cursor]
            r_cursor += 1

    for l_cursor in range(l_cursor, len(left)):
        merged[l_cursor + r_cursor] = left[l_cursor]

    for r_cursor in range(r_cursor, len(right)):
        merged[l_cursor + r_cursor] = right[r_cursor]

    return merged


for algoritmo in (sort_bubble, sort_merge):
    name_algoritmo = algoritmo.__name__

    numbers = list(range(10_000))
    shuffle(numbers)

    with Cronometro(name_algoritmo):
        algoritmo(numbers)


# bubble sort = O(n²)
# merge sort = O(n log n)