def get_index_repeat(list: int):
    result = []
    nums = []
    for p in range(len(list)):
        for i, n in enumerate(list):
            if p != i:
                if list[p] == n and list[p] not in nums:
                    result.append((p, i))
        nums.append(list[p])
    return result


# Complexidade O(n³)


if __name__ == "__main__":
    l1 = [1, 1, 3, 1, 1, 2, 3]
    l2 = [1, 1, 2, 3]
    l3 = [2, 4, 3, 1, 1, 2, 3]

    print(get_index_repeat(l1))
    print(get_index_repeat(l2))
    print(get_index_repeat(l3))
