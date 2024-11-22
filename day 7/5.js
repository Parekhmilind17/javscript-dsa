let arr=[1,2,3,4,5]
let n=[]


function mod(arr)
{
    for(let i=0;i<arr.length;i++)
    {

    if(i%2==0)
    {
        n.push(arr[i]*arr[i])
    }
    else
    {
        n.push(arr[i]/2)
    }
    }
    }
    mod(arr)
console.log(n)