def vertical_inverted(word):
    for n in range(len(word)):
        for i in range(len(word) - n):
            print(word[i], end="")
        print()


if __name__ == "__main__":
    word = input("Digite uma palavra: ")
    vertical_inverted(word)
