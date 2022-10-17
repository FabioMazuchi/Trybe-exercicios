from linkedList import LinkedList
from rich import print


class Stack:
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)


if __name__ == "__main__":
    stack = Stack()

    print(stack.is_empty())
