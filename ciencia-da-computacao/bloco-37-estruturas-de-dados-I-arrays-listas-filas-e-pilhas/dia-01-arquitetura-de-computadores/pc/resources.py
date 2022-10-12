from subprocess import check_output
from time import sleep

cpu_info = check_output("lscpu").decode("UTF-8").split("\n")
info_desejada = {
    "nome do modelo": "Modelo",
    "cpu(s)": "Cores",
    "cpu mhz": "Velocidade (MHz)",
    "cache de L1d": "Cache L1d",
    "cache de L1i": "Cache L1i",
    "cache de l2": "Cache L2",
}

print("*" * 20, "Processador", "*" * 20,)
for des_name, des_descrição in info_desejada.items():
    for info in cpu_info:
        key = info.split(":")[0].strip().lower()
        if key == des_name:
            info = info.split(":")[-1].strip()
            print(f"{des_descrição}: {info}")

print("*" * 22, "Memória", "*" * 22,)
while True:
    memory_info = [
        info
        for info in check_output("free").decode("UTF-8").split("\n")[1]
        .split(" ")
        if info != ""
    ]
    memory_total = int(memory_info[1]) / 1000
    memory_used = int(memory_info[2]) / 1000

    print(
        f"Memória total: {memory_total:.0f}MB\n"
        f"Memória utilizada: {memory_used:.0f}MB"
    )
    sleep(1)
