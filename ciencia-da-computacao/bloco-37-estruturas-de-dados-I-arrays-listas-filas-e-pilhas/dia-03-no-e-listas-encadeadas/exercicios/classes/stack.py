from linkedList import LinkedList
from rich import print


class Stack:
    def __init__(self):
        self.data = LinkedList()

    def is_empty(self):
        return not len(self.data)

    def push(self, value):
        self.data.insert_last(value)

    def pop(self):
        return self.data.remove_last()

    def peek(self):
        return self.data.get_element_at(len(self.data))


if __name__ == "__main__":
    stack = Stack()

    print(stack.is_empty())

    stack.push(5)
    stack.push(6)
    stack.push(7)

    print(stack.is_empty())
    print(stack.data)
    print(stack.pop())
    print(stack.data)
    print(stack.peek())
