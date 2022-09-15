from classes.ManipuladorDeLog import ManipuladorDeLog


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(self, msg):
        with open("log.txt", "a") as file:
            print(msg, file=file)
