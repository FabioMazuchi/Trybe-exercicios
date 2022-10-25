from rich import print


def nota_redutor(escolhas, adivinhas):
    return min(escolhas.difference(adivinhas))


def nota_partida(escolhas, adivinhas):
    return max(escolhas.difference(adivinhas))


def nota_individual(escolha, adivinha):
    esc_set = set(escolha)
    adv_set = set(adivinha)

    return nota_partida(esc_set, adv_set) - nota_redutor(esc_set, adv_set)


def blefe(jogadas):
    jogadores = list(jogadas.keys())

    j1 = nota_individual(jogadas[jogadores[0]], jogadas[jogadores[1]])
    j2 = nota_individual(jogadas[jogadores[1]], jogadas[jogadores[0]])

    if j1 > j2:
        return jogadores[0]
    elif j1 < j2:
        return jogadores[1]
    else:
        return None


if __name__ == "__main__":
    entrada = {"Clara": [0, 11, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}
    vencedor = blefe(entrada)

    if vencedor:
        print(f"Vencedor: {vencedor}")
    else:
        print("Empate")
