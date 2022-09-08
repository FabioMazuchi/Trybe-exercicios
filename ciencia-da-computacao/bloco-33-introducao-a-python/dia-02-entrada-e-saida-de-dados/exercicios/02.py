import random

PALAVRAS = ["Gato", "Cachorro", "Elefante", "Urso", "Coelho"]


def palavra_secreta_embaralhada(palavra):
    palavra_secreta = random.choice(palavra)
    palavra_embaralhada = "".join(
        random.sample(palavra_secreta, len(palavra_secreta))
    )
    return palavra_secreta, palavra_embaralhada


def get_palpites():
    palpites = []
    for tentativa in range(3):
        palpite = input("Adivinhe a palavra: ")
        palpites.append(palpite)
    return palpites


def check_resultados(palavra_secreta, palpites):
    if palavra_secreta in palpites:
        print(f"Você venceu: {palavra_secreta}")
    else:
        print(f"Você perdeu: {palavra_secreta}")


if __name__ == "__main__":
    palavra_secreta, palavra_embaralhada = palavra_secreta_embaralhada(
        PALAVRAS
    )
    print(f"A palavra embaralhada é {palavra_embaralhada}")
    palpites = get_palpites()
    check_resultados(palavra_secreta, palpites)
