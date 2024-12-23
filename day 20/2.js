let arr=[1,2,2,3,3,3];

let map = new Map()

arr.forEach((el)=>
{
    if(!map.has(el))
    {
        map.set(el,1)
    }
    else
    {
        map.set(el,map.get(el)+1)
    }
})

console.log(map);