function MyQueue() {
  this.s1 = [];
  this.s2 = [];
}

MyQueue.prototype.enqueue = function(x) {
  while (this.s2.length !== 0) {
    this.s1.push(this.s2.pop());
  }
  this.s1.push(x);
}

MyQueue.prototype.dequeue = function() {
  while (this.s1.length !== 0) {
    this.s2.push(this.s1.pop());
  }
  return this.s2.pop();
}


var q = new MyQueue();
q.enqueue(1);
console.log(q.s1);
q.enqueue(2);
console.log(q.s1);
q.enqueue(3);
console.log(q.s1);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());