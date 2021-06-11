function Node(data) {
	this.data = data;
	this.end = false;
	this.children = {};
}

function Trie() {
	this.root = new Node();
}

Trie.prototype.insert = function (word) {
	let node = this.root;
	for (char of word) {
		if (!node.children[char]) node.children[char] = new Node(char);
		node = node.children[char];
	}
	node.end = true;
};
