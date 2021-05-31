class PriorityQueueTS<T> {
    private heap: T[] = [];
    private comparator: (a: T, b: T) => boolean;
    constructor(comparator?: (a: T, b: T) => boolean) {
        this.heap = new Array();
        this.comparator = comparator
            ? comparator
            : (a: T, b: T) => {
                  return a < b;
              };
    }

    public insert(item: T): void {
        this.heap.push(item);
        let i = this.heap.length - 1;
        // compare parent with this element, if true then return else continue till root
        while (i > 0) {
            const p = this.parent(i);
            if (this.comparator(this.heap[p], this.heap[i])) {
                break;
            }
            this.swap(i, p);
            i = p;
        }
    }

    public pop(): T | undefined {
        if (this.heap.length == 0) return undefined;

        // Swap with last element and pop the top element
        this.swap(0, this.heap.length - 1);
        const item = this.heap.pop();

        // start from top, check for condition, find the highest among 3 child and swap and continue with that child
        let current = 0;
        while (this.hasLeft(current)) {
            let smallerChild = this.left(current);
            if (
                this.hasRight(current) &&
                this.comparator(this.heap[this.right(current)], this.heap[this.left(current)])
            )
                smallerChild = this.right(current);

            if (this.comparator(this.heap[current], this.heap[smallerChild])) break;

            this.swap(current, smallerChild);
            current = smallerChild;
        }
        return item;
    }
    public peek(defaultVal?: T): T | undefined {
        return this.heap.length == 0 ? defaultVal : this.heap[0];
    }
    public size(): number {
        return this.heap.length;
    }
    public isEmpty(): boolean {
        return this.heap.length == 0;
    }
    private parent = (index: number) => Math.floor((index - 1) / 2);
    private left = (index: number) => 2 * index + 1;
    private right = (index: number) => 2 * index + 2;
    private hasLeft = (index: number) => this.left(index) < this.heap.length;
    private hasRight = (index: number) => this.right(index) < this.heap.length;
    private swap = (a: number, b: number) => {
        const tmp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = tmp;
    };
}
