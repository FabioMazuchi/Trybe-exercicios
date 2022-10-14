def embaralhar(list: int):
    res = []
    div_por_2 = len(list) // 2
    for d in range(div_por_2):
        res.extend(list[d::div_por_2])
    return res


# Complexidade O(n)


if __name__ == "__main__":
    c1 = [2, 6, 4, 5]
    c2 = [1, 4, 4, 7, 6, 6]

    print(embaralhar(c1))
    print(embaralhar(c2))
