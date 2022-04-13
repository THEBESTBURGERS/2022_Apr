// let x = 1;

// if (true) {
//   let x = 10;
//   console.log(x); // 10
// }

// console.log(x); // 1


let x  = 1;
{
  let x = 10;
  console.log(x);
}
{
  let x = 20;
  console.log(x);
}
console.log(x);