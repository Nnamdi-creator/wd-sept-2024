const score = [1,2,3,4,5,6,7,8,9,10,11];
score.sort(function (x,y){
    return x-y
})
console.log(score)
score.sort(function (x,y){
    return y-x
})
console.log(score)

//middle element
let midElement = Math.floor(score.lenght/2)
//smallest element
let smallestElement = Math.min(score)
//largest element
let largestElement = Math.max(score)
console.log(
     midElement,
    smallestElement,
    largestElement
)  

