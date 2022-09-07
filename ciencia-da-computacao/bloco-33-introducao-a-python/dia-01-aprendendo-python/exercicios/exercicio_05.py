def calcTinta(metrosQuadrados):
    litros = metrosQuadrados // 3
    latas = litros // 18
    if litros % 18:
        latas += 1
    return latas, latas * 80


print(calcTinta(68))
