from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.__rotinas = []

    def adicionar_rotinas(self, rotina):
        self.__rotinas.append(rotina)

    def adicionar_todas_rotinas(self):
        for rotina in self.__rotinas:
            rotina.acionar()

    def despertar(self):
        print("Alarme tocando... trimmm! trimmmm!")
        self.adicionar_todas_rotinas()


class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        raise NotADirectoryError


class AcionadorLuzes(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("💡 Luzes acesas!")


class AcionadorCafeteira(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("☕ Preparando o café!")


class AcionadorPc(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("💻 Ligar PC")


alarme = Alarme()
AcionadorLuzes(alarme)
AcionadorCafeteira(alarme)
AcionadorPc(alarme)

alarme_tarde = Alarme()
AcionadorPc(alarme_tarde)

alarme.despertar()
alarme_tarde.despertar()
