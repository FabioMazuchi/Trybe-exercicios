def calcPrice(litros, tipo):
    total = 0
    a = 1.9 * litros
    g = 2.5 * litros
    if tipo == "A":
        if litros <= 20:
            total = a - a * 0.3
        else:
            total = a - a * 0.5
    else:
        if litros <= 20:
            total = g - g * 0.4
        else:
            total = g - g * 0.6
    return total


print(calcPrice(5, "A"))
print(calcPrice(21, "A"))
print(calcPrice(5, "B"))
print(calcPrice(21, "B"))
