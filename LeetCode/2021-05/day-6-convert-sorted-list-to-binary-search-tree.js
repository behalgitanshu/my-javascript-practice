var sortedListToBST = function (head) {
	if (!head) {
		return null;
	}
	let current = head;
	let root;
	while (current) {
		root = insert(root, new TreeNode(current.val));
		current = current.next;
	}
	return root;
};

const getHeight = (node) => {
	if (node === null) {
		return -1;
	}
	return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
};

const getBalanceFactor = (node) => {
	if (node === null) {
		return 0;
	}
	return getHeight(node.left) - getHeight(node.right);
};

const insert = (root, node) => {
	if (!root) {
		return node;
	}
	if (node.val < root.val) {
		root.left = insert(root.left, node);
	} else {
		root.right = insert(root.right, node);
	}
	root = balance(root);
	return root;
};

const balance = (node) => {
	const rootBalanceFactor = getBalanceFactor(node);
	const rootLeftBalanceFactor = getBalanceFactor(node.left);
	const rootRightBalanceFactor = getBalanceFactor(node.right);

	if (Math.abs(rootBalanceFactor) <= 1) {
		return node;
	}
	if (rootBalanceFactor > 1 && rootLeftBalanceFactor > 0) {
		return rotateR(node);
	} else if (rootBalanceFactor > 1 && rootLeftBalanceFactor < 0) {
		node.left = rotateL(node.left);
		return rotateR(node);
	} else if (rootBalanceFactor < -1 && rootRightBalanceFactor < 0) {
		return rotateL(node);
	} else if (rootBalanceFactor < -1 && rootRightBalanceFactor > 0) {
		node.right = rotateR(node.right);
		return rotateL(node);
	}
};

const rotateR = (root) => {
	const nextRoot = root.left;
	const temp = root.left.right;
	nextRoot.right = root;
	root.left = temp;
	return nextRoot;
};

const rotateL = (root) => {
	const nextRoot = root.right;
	const temp = root.right.left;
	nextRoot.left = root;
	root.right = temp;
	return nextRoot;
};
