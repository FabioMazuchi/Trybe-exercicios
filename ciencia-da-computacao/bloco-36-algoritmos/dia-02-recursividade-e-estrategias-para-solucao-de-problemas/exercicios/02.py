def count_par(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_par(n - 1)
    return count_par(n - 1)
