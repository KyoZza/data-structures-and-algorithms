class PriorityQueue {
  #items = [];

  get count() {
    return this.#items.length;
  }

  enqueue(item, priority) {
    // this.#items = [...this.#items, {item, priority}];
    // this.#items.sort((a, b) => a.priority - b.priority);

    this.#items[priority] = 
      Array.isArray(this.#items[priority]) ? [...this.#items[priority], item] : [item];
  }

  dequeue() {
    return this.count ? this.#items.splice(0, 1)[0] : undefined;
  }

  values() {
    return this.#items.flat();
  }

  first() {
    return this.count ? this.values()[0] : undefined;
  }
}

const queue = new PriorityQueue();


queue.enqueue('a', 2);
queue.enqueue('t', 3);
queue.enqueue('e', 1);
queue.enqueue('s', 1);

console.log(queue.count);
console.log(queue.first());
// console.log(queue.dequeue())
// console.log(queue.count);
// console.log(queue.first());

console.log(queue.values());