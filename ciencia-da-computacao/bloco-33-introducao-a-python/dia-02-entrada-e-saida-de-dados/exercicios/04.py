import csv
import json


def getLivros(arquivo):
    return json.load(arquivo)


def count_livros_categoria(livros):
    categorias = {}
    for livro in livros:
        for categoria in livro["categories"]:
            if not categorias.get(categoria):
                categorias[categoria] = 0
            categorias[categoria] += 1
    return categorias


def calc_porcentagem_categoria(count_categoria, total_livros):
    return [
        [categoria, livros / total_livros]
        for categoria, livros in count_categoria.items()
    ]


def escreva_csv(arquivo, header, linhas):
    writer = csv.writer(arquivo)
    writer.writerow(header)
    writer.writerows(linhas)


if __name__ == "__main__":
    with open("livros.json") as arquivo:
        livros = getLivros(arquivo)

    count_result = count_livros_categoria(livros)

    numero_livros = len(livros)

    livros_porcentagem_linhas = calc_porcentagem_categoria(
        count_result, numero_livros
    )

    header = ["categoria", "porcentagem"]
    with open("resultado.csv", "w") as arquivo:
        escreva_csv(arquivo, header, livros_porcentagem_linhas)
