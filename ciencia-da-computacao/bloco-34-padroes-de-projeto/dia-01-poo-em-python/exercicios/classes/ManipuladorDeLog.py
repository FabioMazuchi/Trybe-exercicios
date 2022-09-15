from abc import ABC, abstractmethod


class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(self, msg):
        raise NotImplementedError
