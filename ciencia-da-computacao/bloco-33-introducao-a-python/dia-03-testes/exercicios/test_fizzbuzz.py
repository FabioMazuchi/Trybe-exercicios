from funcoes import fizzbuzz
import pytest


def test_error():
    with pytest.raises(TypeError):
        fizzbuzz("3")


def test_fizz_buzz():
    assert fizzbuzz(2) == [1, 2]


def test_return_fizz():
    assert fizzbuzz(3) == [1, 2, "Fizz"]


def test_return_buzz():
    assert fizzbuzz(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_return_fizzbuzz():
    assert fizzbuzz(15)[-1] == "FizzBuzz"
