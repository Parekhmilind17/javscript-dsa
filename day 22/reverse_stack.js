class stack
{
    constructor
    (){
        this.arr=[]
    }
    push(el)
    {
        
        this.arr.push(el)
    }
    isEmpty()
    {
        return this.arr.length==0
    }
    pop()
    {
        if(this.arr.isEmpty)
        {
            return "underflow";
        }
        return this.arr.pop()
    }
  
    peek()
    {
    
        return this.arr[this.arr.length-1];
    }
    size()
    {
        return this.arr.length;
    }

    print()
    {
        return this.arr;
    }
}

let stk = new stack();
let stk1 = new stack();
    
stk.push(40);
stk.push(30);
stk.push(20);

while(stk.isEmpty()==false)
{
    stk1.push(stk.pop())
}

console.log(stk1.print());
