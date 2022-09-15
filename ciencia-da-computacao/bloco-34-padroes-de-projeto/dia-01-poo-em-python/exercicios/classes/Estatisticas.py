from typing import Counter


class Estatisticas:
    def media(self, numbers):
        return sum(numbers) / len(numbers)

    def mediana(self, numbers):
        numbers.sort()
        i = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[i - 1] + numbers[i]) / 2

        return numbers[i]

    def moda(self, numbers):
        n, _ = Counter(numbers).most_common()[0]
        return n
