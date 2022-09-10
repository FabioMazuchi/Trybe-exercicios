def fizzbuzz(numero):
    list = []
    for n in range(numero):
        if (n + 1) % 3 == 0 and (n + 1) % 5 == 0:
            list.append("FizzBuzz")
        else:
            if (n + 1) % 3 == 0:
                list.append("Fizz")
            elif (n + 1) % 5 == 0:
                list.append("Buzz")
            else:
                list.append(n + 1)
    return list
