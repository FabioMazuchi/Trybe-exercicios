from classes.Estatisticas import Estatisticas
from classes.Tv import Tv

numbers = [1, 4, 5, 8, 9, 5.7, 8, 10]

tv_50 = Tv(50)

tv_50.ligar_desligar()
tv_50.aumentar_volume()
tv_50.modificar_canal(78)

print(tv_50)


est = Estatisticas()

print(f"{est.media(numbers):.1f}")
print(f"{est.mediana(numbers):.1f}")
print(f"{est.moda(numbers):.1f}")
