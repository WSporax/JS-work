// array of arr[1,2,3] with 3 being the arr.length = k
// the permutations returned are [1,2,3], [2,3,1], [3,1,2], [3,1,2], [3,2,1], [1,3,2]
//


// function generatePermutations(permutation, arr, positions=[])
// {
//     if(permutation.length == positions)
//     {
//         console.log(`Permutation is found`);
//     }
//     else
//     {
//         for(let p of permutation)
//         {
//             for(let pos= 0; pos <positions; pos++)
//             {
//                 if(pos) //truthy, currently assigned
//                 {
//                     console.log(`Position ${pos} is filled`);
//                 }
//                 else
//                 {
//                     permutation[pos] = p;
//                 }
//             }
//         }
//     }
// }

function badswap(x, y)
{
    let temp;
    temp = x;
    x = y;
    y = temp;
    return [x, y];
}
function swap(a, b) {
    return [b, a]
  }

let a = 4;
let b = 111;
console.log(`before swap: a is ${a}, b is ${b}`);
[a,b] = badswap(a,b);
console.log(`after swap: a is ${a}, b is ${b}`);