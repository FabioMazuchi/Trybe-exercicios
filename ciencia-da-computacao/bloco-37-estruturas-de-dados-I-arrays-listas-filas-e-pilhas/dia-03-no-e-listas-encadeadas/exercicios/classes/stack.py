from linkedList import LinkedList
from rich import print


class Stack:
    def __init__(self):
        self.data = LinkedList()

    def is_empty(self):
        return not len(self.data)

    def push(self, value):
        self.data.insert_last(value)


if __name__ == "__main__":
    stack = Stack()

    print(stack.is_empty())

    stack.push(5)

    print(stack.is_empty())
    print(stack.data)
