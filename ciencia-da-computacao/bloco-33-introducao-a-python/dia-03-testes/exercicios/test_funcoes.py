from funcoes import fizz_buzz


def test_fizz_buzz_return_fizz():
    assert fizz_buzz(3) == [1, 2, "Fizz"]


def test_fizz_buzz_return_buzz():
    assert fizz_buzz(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_fizz_buzz_return_fizzbuzz():
    assert fizz_buzz(15) == [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]

    
