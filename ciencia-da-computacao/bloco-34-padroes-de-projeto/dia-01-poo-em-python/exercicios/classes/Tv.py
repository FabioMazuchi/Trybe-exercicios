class Tv:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def __str__(self):
        vo = f"Volume: {self.__volume}\n"
        ta = f"Tamanho: {self.__tamanho}\n"
        ca = f"Canal: {self.__canal}\n"
        li = f"Ligada: {self.__ligada}\n"
        result = vo + ta + ca + li
        return f"_______ STATUS TV ________\n{result}"

    def aumentar_volume(self):
        if self.__volume == 99:
            print("Valume máximo")
        else:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume == 1:
            print("Valume mínimo")
        else:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal < 1 or canal > 99:
            raise ValueError("Canal indisponível")
        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
