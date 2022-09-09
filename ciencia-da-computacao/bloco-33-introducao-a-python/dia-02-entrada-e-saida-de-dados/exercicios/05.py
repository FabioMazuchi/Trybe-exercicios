import json
import random


def getPokemons(arquivo):
    return json.load(arquivo)["results"]


def sortearPokemon(pokemons):
    return random.choice(pokemons)["name"]


def game(pokemonName):
    count = 0
    resposta = ""
    dica = ""
    result = ""
    print("====== POKEMON GAME =======")
    while count != len(pokemonName) and pokemonName != resposta:
        resposta = input("Qual o nome do pokemon? ")
        if resposta != pokemonName:
            count += 1
            dica += pokemonName[count - 1]
            print("DICA: " + dica)
        else:
            result = "Você venceu :("
        if count == len(pokemonName):
            result = "Você perdeu :("
    print(result)


if __name__ == "__main__":
    with open("pokemons.json") as arquivo:
        pokemons = getPokemons(arquivo)
        pokSorteado = sortearPokemon(pokemons)
        game(pokSorteado)
