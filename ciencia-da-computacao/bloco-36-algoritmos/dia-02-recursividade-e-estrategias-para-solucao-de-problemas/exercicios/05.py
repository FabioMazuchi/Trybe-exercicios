def tem_divisor(n, x, y):
    if x > y:
        return False
    elif n % x == 0:
        return True
    return tem_divisor(n, x + 1, y)


def primo(n):
    return n > 1 and not (tem_divisor(n, 2, n - 1))
