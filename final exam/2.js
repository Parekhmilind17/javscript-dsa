let m1 = []
let m2 = []

function data(el){
    m2.push(el)
    
    while(m1.length > 0){
        m2.unshift(m1.pop())
    }

    [m1,m2] = [m2,m1]
}

data(10)
data(20)
data(30)
data(40)
data(50)

let arr =[];

for(let i=m1.length-1;i>=0;i--)
{
    arr.push(m1[i]);
}
console.log(arr)