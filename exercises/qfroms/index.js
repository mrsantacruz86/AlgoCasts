// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor(){
    this.store = new Stack();
    this.dump = new Stack();
  }

  add(record){
    this.store.push(record);
  }
  
  peek(){
    while(this.store.peek()){
      this.dump.push(this.store.pop());
    }

    const record = this.dump.peek();

    while(this.dump.peek()){
      this.store.push(this.dump.pop())
    }
    return record;
  }
  remove(){
    while(this.store.peek()){
      this.dump.push(this.store.pop());
    }

    const record = this.dump.pop();

    while(this.dump.peek()){
      this.store.push(this.dump.pop())
    }
    return record;
  }

}

module.exports = Queue;
