var arrA = [
  { prop1: 'value of Array A...!' },
  { someProp: 'also value of Array' },
  3,
  4,
  5,
];

var arrB = arrA;

arrB[0].prop1 = 42;

console.log(arrA);

////Slice function copies all the elemetns of the array returning the new array. Howeever it doesnt do the deep copyning.

//It does do only te shallow copying
//  function slice(arr){
//   let result = [];

//   for( i=0;i<arrA.length; i+=){
//     result.push(arr[i])
//   }
//   return result
//  }
