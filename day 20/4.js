let arr=[1,2,3];
let arr2=[3,4,5];
let arr3=[];

let myset=new Set(arr)

arr2.forEach((el)=>
{
    myset.add(el);
})

console.log(myset);

myset.forEach((el)=>
{
    arr3.push(el);
})

console.log(arr3);
