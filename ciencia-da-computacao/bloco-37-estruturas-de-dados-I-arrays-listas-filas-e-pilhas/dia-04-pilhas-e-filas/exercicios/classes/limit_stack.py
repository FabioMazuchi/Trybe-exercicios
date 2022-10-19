from stack import Stack
from rich import print


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):  # O(1)
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)


if __name__ == "__main__":
    stack_limit = LimitStack(2)
    stack_limit.push(2)
    stack_limit.push(4)

    try:
        stack_limit.push(7)
    except StackOverflow:
        print("The Stack is full")

    print(stack_limit)
