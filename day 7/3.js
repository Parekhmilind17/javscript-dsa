let arr=[2,5,8,11,14]
let n=[]
let sq = 0;
for(let i=0;i<arr.length;i++)
{
    
    if(arr[i]%2==0)
    { 

        n.push(arr[i]*arr[i])
        
    }
    else{
        n.push(arr[i])
    }
    

}
console.log(n)
