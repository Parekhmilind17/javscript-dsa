let arr = [1,2,3,4,5,7,9]
let target = 1;
let left = 0;
let right = arr.length-1;

while(left<right)
{
    if(arr[left]==target)
    {
        console.log([left])
        break;
        
    }
    
    else if(arr[right]==target)
    {
        console.log([right])
        break;
        
    }

    left++;
    right--;
}

