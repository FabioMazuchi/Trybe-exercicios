from random import randrange


def mediaAleatoria(n):
    lista_de_medias = []

    for _ in range(100):
        media = 0
        for _ in range(n):
            media += randrange(1, n)
        media = f"{media / n:.1f}"
        lista_de_medias.append(media)
    return lista_de_medias

# tempo O(n) e espaço O(1)
