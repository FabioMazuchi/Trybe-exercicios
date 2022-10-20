from classes.stack import Stack
from rich import print


def estacionar():
    numero_placa = input("Número da placa: ")
    garagem.push(numero_placa)
    print(f"Veículo com a placa nº {numero_placa} estacionado")


def remover_veiculo():
    numero_placa = input("Número da placa: ")
    rua = Stack()
    removido = False
    while not garagem.is_empty():
        placa_estacionada = garagem.pop()
        if placa_estacionada == numero_placa:
            removido = True
            print(f"Veículo com a placa nº {numero_placa} removido")
        else:
            rua.push(placa_estacionada)

    while not rua.is_empty():
        veiculo_rua = rua.pop()
        garagem.push(veiculo_rua)

    if not removido:
        print("Não há veículo estacionado com esta placa")


garagem = Stack()
opção = 0

while opção != 4:
    print("Opções:")
    print("=" * 30)
    print("1 - Adicionar veículo")
    print("2 - Remover veículo")
    print("3 - Veículos estacionados")
    print("4 - Sair")
    opção = int(input("Opção: "))

    if opção == 1:
        estacionar()
    elif opção == 2:
        remover_veiculo()
    elif opção == 3:
        print(f"Veículos estacionados: {str(garagem)}")
    else:
        print("Finalizando estacionamento!")
        opção = 4


# Complexidade de tempo é O(n)
