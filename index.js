// ********** Node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
};

// ********** LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // ********** add first
  addFirst(data) {
    this.head = new Node(data, this.head);
    this.size++
  }

  // ********** add last
  addLast(data) {
    let node = new Node(data);
    let current;
    // if empty, initial the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++
  }

  // ********** add at index
  addIndex(data, index) {
    if (index < 0 || index > this.size) {
      // error handling
      console.error("Error: The index '" + index + "' that you have insert is not valid.");
    }
    else if (!index) {
      // if it's in first
      this.addFirst(data);
    } else {
      // if it's in between or last
      const node = new Node(data);
      let current, prev;
      current = this.head;
      let count = 0;
      while (count < index) {
        prev = current;
        count++;
        current = current.next;
      }
      node.next = current;
      prev.next = node;
      this.size++;
    }
  }

  // ********** remove from first
  removeFirst() {
    let current = this.head;
    current = current.next
    this.head = current;
    this.size--;
  }

  // ********** remove at index
  removeIndex(index) {
    if (index < 0 || index >= this.size) {
      console.error("Error: The index '" + index + "' that you have insert is not valid.");
    } else {
      let prev, current;
      current = this.head;
      let count = 0;
      if (!index) {
        while (count < this.size - 1) {
          count++;
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
      } else {
        while (count < index) {
          count++;
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
      }
      this.size--;
    }
  }

  // ********** remove from last
  removeLast() {
    removeIndex(this.size - 1);
  }

  // ********** get index
  getAt(index) {
    if (index < 0 || index > this.size) {
      console.error("Error: The index '" + index + "' that you have insert is not valid.");
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.warn('The index that you want is: ' + current.data)
      }
      count++;
      current = current.next;
    }
  }

  // ********** get min data
  getMin() {
    let current = this.head;
    let min = Number(current.data);
    while (current) {
      if (Number(current.data) < min) {
        min = Number(current.data);
      }
      current = current.next;
    }
    console.warn('The Minimum value that you want is: ' + min);
  }

  // ********** get Max data
  getMax() {
    let current = this.head;
    let max = Number(current.data);
    while (current) {
      if (Number(current.data) > max) {
        max = Number(current.data);
      }
      current = current.next;
    }
    console.warn('The Maximum value that you want is: ' + max);
  }

  // ********** print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // ********** clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

// ********** create new LinkedList 
const ll = new LinkedList();
console.log(ll)