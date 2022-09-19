VERMELHO = "\033[91m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"


class Log:
    def dispara_log(self, message):
        return message


class LogSuccess:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{self.log.dispara_log(message)}"


class LogWarning:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{LARANJA}{self.log.dispara_log(message)}"


class LogError:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{self.log.dispara_log(message)}"


log = Log()

print(LogError(log).dispara_log("Algo deu errado."))
print(LogWarning(log).dispara_log('Parece que esta faltando algo.'))
print(LogSuccess(log).dispara_log("Ok, está funcionando."))
