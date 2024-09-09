// 1. Find the Product
let arr = [1,2,3,4,5]
function product(){
    let p = 1;
    for(let i=0;i<arr.length;i++){
         p *= arr[i]
        
    }
    console.log(p)
}
product(arr);

// 2. Find the Sum
function sum(){
    let p = 0;
    for(let i=0;i<arr.length;i++){
         p += arr[i]
    }
    console.log(p)
}
sum(arr)

// 3.count occurance

let k = 3
let count = 1;
function occur(){
    for(let i=0;i< arr.length;i++){
        if(arr[i] == k)
         count++;
    }
    console.log(count)
}
occur([3,3,1,2])

// 4. even odd
 
function evenOdd(){
    let even=[];
    let odd=[];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] %2 == 0){
            even.push(arr[i])
        }
        else{
            odd.push(arr[i])
        }
    }
    console.log(even)
    console.log(odd)
}
evenOdd([1,2,3,4,5,6,7])

// 5. Find whether the number is present or not

function isPresent(arr){
    let key = 5
    let found = false
   for(let i = 0;i<arr.length;i++){
        if(arr[i] == key){
            console.log("Yes")
            found = true;
            break;
        }
    }
        if(!found){
             console.log("No")
        }
}
isPresent([1,2,3,4,5])

// 6. Higher Age

let arr1 = [11,23,3,45,72,68]
let val = arr1.filter((el)=>{
    return el>18
})
console.log(val)

// 7. Increment the Array Elements
let arr2 = [1,2,3,4,5]
let inc = arr.map((el)=>{
    return el+1;
})
console.log(inc)

// 8. Pass or Fail
let arr3 = [13,89,45,98,67,45,54]
let marks = arr3.filter((el)=>{
    return el>=32
})
if(arr3.length == marks.length){
    console.log("yes")
}
else{
    console.log("No")
}

// 9. unique color shift

function repeat(arr){
    let count = 0 ;
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }
    }
    console.log(count)
}
repeat([3,2,4,1,2,3])

//10 Min and Max

 function minMax(arr){
    let min = arr[0];
    let max = arr[0]
   for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
        if(arr[i]>max){
            max = arr[i]
        }
    }
    console.log(`Minimum number is ${min}`)
    console.log(`Maximum number is ${max}`)
 }
 minMax([66,33,11,44,66,22,77])