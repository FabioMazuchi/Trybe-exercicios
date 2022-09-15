from classes.Retangulo import Retangulo
from classes.Quadrado import Quadrado
from classes.Estatisticas import Estatisticas
from classes.Tv import Tv
from classes.Circulo import Circulo
from classes.LogEmTela import LogEmTela
from classes.Log import Log
from classes.LogEmArquivo import LogEmArquivo

numbers = [1, 4, 5, 8, 9, 5.7, 8, 10]

tv_50 = Tv(50)

tv_50.ligar_desligar()
tv_50.aumentar_volume()
tv_50.modificar_canal(78)

print(tv_50)


est = Estatisticas()

print(f"Média = {est.media(numbers):.1f}")
print(f"Mediana = {est.mediana(numbers):.1f}")
print(f"Moda = {est.moda(numbers):.1f}\n")

quadrado = Quadrado(5)
print(f"Área do quadrado = {quadrado.area():.1f}m²")
print(f"Perímetro do quadrado = {quadrado.perimetro():.1f}m\n")

retangulo = Retangulo(5, 8)
print(f"Área do retângulo = {retangulo.area():.1f}m²")
print(f"Perímetro do retângulo = {retangulo.perimetro():.1f}m\n")

circulo = Circulo(10)
print(f"Área do circulo = {circulo.area():.1f}m²")
print(f"Perímetro do circulo = {circulo.perimetro():.1f}m\n")

log_em_tela = LogEmTela()
log_em_arquivo = LogEmArquivo()
log = Log([log_em_tela, log_em_arquivo])
log.erro("ZeroDivisionError: division by zero")
