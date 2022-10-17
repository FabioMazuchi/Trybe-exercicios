from linkedList import LinkedList
from rich import print


class Queue:
    def __init__(self):
        self.data = LinkedList()

    def is_empty(self):
        return not len(self.data)


if __name__ == "__main__":
    queue = Queue()

    print(queue.is_empty())
