class Stack {
  #items = [];

  get count() {
    return this.#items.length;
  }

  peek() {
    return this.count ?
      this.#items[this.count - 1] : undefined;
  }

  push(item) {
    this.#items = [...this.#items, item];
  }

  pop() {
    if(!this.count) return undefined;

    return this.#items.splice(this.count - 1, 1)[0];
  }
}


const stack = new Stack();

stack.push('a');
stack.push('t');
stack.push('d');
console.log(stack.count);
console.log(stack.peek());

stack.pop();
console.log(stack.count);
console.log(stack.peek());