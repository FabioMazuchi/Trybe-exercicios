def trinagleType(s1, s2, s3):
    trinagle = s1 + s2 > s3 and s2 + s3 > s1 and s1 + s3 > s2
    if not trinagle:
        return "não é triângulo"
    elif s1 == s2 == s3:
        return "equilátero"
    elif s1 == s2 or s2 == s3 or s1 == s3:
        return "isósceles"
    else:
        return "escaleno"


print(trinagleType(1, 2, 3))
print(trinagleType(2, 2, 3))
print(trinagleType(2, 2, 2))
print(trinagleType(2, 4, 3))
