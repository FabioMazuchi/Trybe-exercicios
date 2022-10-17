from linkedList import LinkedList
from rich import print


class Queue:
    def __init__(self):
        self.data = LinkedList()

    def is_empty(self):
        return not len(self.data)

    def enqueue(self, value):
        self.data.insert_last(value)


if __name__ == "__main__":
    queue = Queue()

    print(queue.is_empty())

    queue.enqueue(3)
    print(queue.data)
