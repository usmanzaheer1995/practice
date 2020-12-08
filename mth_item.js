// https://www.hackerrank.com/contests/programming-interview-questions/challenges/m-th-to-last-element/problem

class Node {
  constructor(value) {
      this.data = value;
      this.next = null;
      this.prev = null;
  }
}

class LinkedList {
  constructor(head = null) {
      this.head = head;
      this.tail = this.head;
      this.length = 0;
  }
  
  append(value) {
      const newNode = new Node(value);
      if (this.head == null) {
          this.head = newNode;
          this.tail = this.head;
          this.length++;
          return this;
      }
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
  }
  
  mValue(m) {
    let currentNode = { ...this.tail };
    if (m > this.length) {
      return 'NIL';
    }
    if (m === this.length) {
        m++;
    }
    while (m > 1) {
      currentNode = currentNode.prev;
      m--;
    }
    return currentNode ? currentNode.data : 'NIL';
  }
}

function processData(input) {
  let linkedList = new LinkedList();
  // input = input.replace(/\n|\r|,/g, " ");
  const m = parseInt(input.split('\n')[0]);
  console.log('input1', input)
  input = input.substring(input.indexOf('  ')).trim().replace(/\s{2,}/g, ' ').split(' ');
  console.log('input2', input)
  for (let i = 0; i < input.length; i++) {
    linkedList.append(parseInt(input[i]));
  }
  // console.log(linkedList.mValue(m));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});