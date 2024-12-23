class stack {
    constructor() {
        this.arr = [];
    }
    push(el) {
        this.arr.push(el)
    }
    print() {
        return this.arr;
    }
}

let stk = new stack();
stk.push(10);
console.log(stk.print());