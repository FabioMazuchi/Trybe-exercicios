def first_false(list):
    low_index = 0
    high_index = len(list) - 1

    while high_index >= low_index:

        middle_index = (high_index + low_index) // 2

        if list[middle_index] is False:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    return low_index
