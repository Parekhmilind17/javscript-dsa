let arr=[1,2,2,3,4,4,5];
let arr1=[];
let myset= new Set(arr)


console.log(myset);

myset.forEach((el)=>
{
    arr1.push(el);
})

console.log(arr1);