from funcoes import filtra_emails_validos


def test_retorna_lista_vazia():
    assert filtra_emails_validos([]) == []


def test_retorna_lista_com_email_valido():
    lista = ["fulano@website.com"]
    result = ["fulano@website.com"]
    assert filtra_emails_validos(lista) == result


def test_retorna_lista_vazia_com_email_invalido():
    lista = ["!fulano@website.com"]
    assert filtra_emails_validos(lista) == []


def test_retorna_lista_com_emails_validos():
    lista = ["!fulano@website.com", "fulana@website.com"]
    result = ["fulana@website.com"]
    assert filtra_emails_validos(lista) == result
