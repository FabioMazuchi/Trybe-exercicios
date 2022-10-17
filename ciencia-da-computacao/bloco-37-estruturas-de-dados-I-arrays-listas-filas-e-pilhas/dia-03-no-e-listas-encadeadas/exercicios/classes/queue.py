from linkedList import LinkedList
from rich import print


class Queue:
    def __init__(self):
        self.data = LinkedList()

    def is_empty(self):
        return not len(self.data)

    def enqueue(self, value):
        self.data.insert_last(value)

    def dequeue(self):
        self.data.remove_first()

    def peek(self):
        return self.data.get_element_at(0)


if __name__ == "__main__":
    queue = Queue()

    print(queue.is_empty())

    queue.enqueue(3)
    queue.enqueue(5)
    queue.enqueue(8)
    print(queue.data)

    queue.dequeue()
    print(queue.data)
    print(queue.peek())
