from funcoes import validate_email
import pytest


def test_username_contem_letras():
    assert validate_email("fulano@website.com") is None


def test_username_contem_letras_e_digitos():
    assert validate_email("fulano123@website.com") is None


def test_username_contem_letras_digitos_e_tracos():
    assert validate_email("fulano-123@website.com") is None


def test_username_contem_letras_digitos_tracos_e_undescore():
    assert validate_email("fulano-1_23@website.com") is None


def test_lanca_excecao_nao_comecar_com_letra():
    with pytest.raises(ValueError):
        validate_email("1fulano@website.com")


def test_username_lanca_excecao():
    with pytest.raises(ValueError):
        validate_email("f&ulano@website.com")


def test_website_contem_apenas_letras_e_digitos():
    assert validate_email("fulano@website123.com") is None


def test_extensao_contem_apenas_tres_caracteres():
    assert validate_email("fulano@website123.com") is None


def test_extensao_lanca_excecao_com_mais_de_tres_caracteres():
    with pytest.raises(ValueError):
        validate_email("fulano@website.comm")
