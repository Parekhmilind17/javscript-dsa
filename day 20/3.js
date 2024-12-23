let arr=[1,2,3,4];
let arr2=[3,4,5,6];
let arr3=[]

let myset = new Set(arr2)
function FindIntersection()
{
      arr.forEach((el)=>
    {
        if(myset.has(el))
        {
         arr3.push(el);   
        }
    })
}

FindIntersection();
console.log(arr3);
