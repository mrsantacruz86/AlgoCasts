// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
const {LinkedList, Node} = require('./linkedlist');
/**
 * @param {LinkedList} list List
 * @param {number} n Index
 */
function fromLast(list, n) {
  /** @type {Node} */
  let slow = list.getFirst();
  /** @type {Node} */
  let fast = list.getAt(n);
  while(fast.next){
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;
