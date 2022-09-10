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


def validate_email(email):
    i = 0
    if not email[i].isalpha():
        raise ValueError("Email deve iniciar com letras")

    while email[i] != "@" and i < len(email):
        result = email[i]
        if (
            not result.isalpha()
            and not result.isdigit()
            and result not in ("_", "-")
        ):
            raise ValueError(
                "O nome de usuário deve conter apenas letras, "
                "dígitos, traços ou underscors"
            )
        i += 1
    i += 1

    while email[i] != "." and i < len(email):
        result = email[i]
        if not result.isalpha() and not result.isdigit():
            raise ValueError("O site deve conter apenas letras e dígitos")
        i += 1
    i += 1

    count = 0
    while i < len(email):
        count += 1
        i += 1
    if count > 3:
        raise ValueError("Valor maximo da extensão é 3")
    return None
