class MainMemory:
    def __init__(self):
        self.clean()
        self.loaded_memory = []

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index: int):
        try:
            return self.loaded_memory[index]
        except (IndexError, TypeError):
            return 0

    def clean(self):
        self.loaded_memory = []
