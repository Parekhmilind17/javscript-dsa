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

let stk = new stack()

let str="nayan";
let str1 =""

for(let char of str)
{
    stk.push(char);
}



while(stk.isEmpty()==false)
{
    
str1 += stk.peek();
stk.pop();
    
}

if(str==str1)
{
    console.log("This is palindrome");
}
else{
    console.log("This is not a palindrome");
}