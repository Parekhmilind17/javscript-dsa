let str = "milind";
let myMap = new Map();
let mySet = new Set();


for(char of str) {
    if(myMap.has(char)==false){
        mySet.add(char);
        myMap.set(char, 1);
    } else {
        myMap.set(char, myMap.get(char) + 1);
    }
}

console.log(myMap);
console.log("Unique elements: ", mySet);
