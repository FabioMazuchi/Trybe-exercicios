def reverse_list(list):
    result = []
    for item in list:
        result.insert(0, item)
    return result


# Solução recursiva
def reverse_recursive(list):
    if len(list) < 2:
        return list
    return reverse_recursive(list[1:]) + [list[0]]
