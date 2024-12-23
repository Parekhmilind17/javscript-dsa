let q1 = []
let q2 = []

function m(el){
    q2.push(el)
    
    while(q1.length > 0){
        q2.push(q1.shift())
    }

    [q1,q2] = [q2,q1]
}

m(10)
m(20)
m(30)
m(40)
m(50)

console.log(q1)