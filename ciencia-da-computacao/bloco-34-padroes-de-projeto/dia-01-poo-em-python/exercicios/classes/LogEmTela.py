from classes.ManipuladorDeLog import ManipuladorDeLog


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(self, msg):
        print(msg)
