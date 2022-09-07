nomes = ["Bob", "João", "Fábio", "Xablau", "Joaquina"]


def maiorNome(lista):
    maior = nomes[0]
    for nome in lista:
        if len(nome) > len(maior):
            maior = nome
    return maior


print(maiorNome(nomes))
