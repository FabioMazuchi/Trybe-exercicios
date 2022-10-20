from rich import print


class Stack:
    def __init__(self):
        self._data = list()

    def __repr__(self):
        return str(self._data)

    def __str__(self):
        str_items = "Pilha:\n"
        for i in range(self.size() - 1, -1, -1):
            value = self._data[i]
            str_items += " |" + str(value) + "|\n"
        return str_items

    def __len__(self):
        return len(self._data)

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None
        return self._data.pop()

    def peek(self):
        if self.is_empty():
            return None
        return self._data[-1]

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def clear(self):
        self._data.clear()

    def min_value(self):  # O(n)
        min = self._data[0]
        for value in self._data:
            if value < min:
                min = value
        return min


if __name__ == "__main__":
    stack = Stack()

    stack.push(1)
    stack.push(2)
    stack.push(3)

    print(stack.min_value())
