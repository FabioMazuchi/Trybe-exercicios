def binary_search(list, value):
    low_index = 0
    high_index = len(list) - 1

    while high_index >= low_index:
        index_middle = (high_index + low_index) // 2
        if list[index_middle] == value:
            return index_middle
        elif list[index_middle] > value:
            high_index = index_middle - 1
        else:
            low_index = index_middle + 1

    return f"{value} não está na lista"
