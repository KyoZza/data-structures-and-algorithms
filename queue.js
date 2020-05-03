class Queue {
  #items = [];

  get count() {
    return this.#items.length;
  }

  enqueue(item) {
    this.#items = [...this.#items, item];
  }

  dequeue() {
    return this.count ? this.#items.splice(0, 1)[0] : undefined;
  }

  first() {
    return this.count ? this.#items[0] : undefined;
  }
}

const queue = new Queue();


queue.enqueue('a');
queue.enqueue('t');
queue.enqueue('s');

console.log(queue.count);
console.log(queue.first());
console.log(queue.dequeue())
console.log(queue.count);
console.log(queue.first());