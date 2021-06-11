//  Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const reverse = (head) => {
	let curr = head,
		prev = null,
		next = null;
	while (curr) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
};
