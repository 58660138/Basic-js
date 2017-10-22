//let จำลองการใช้งานของ block scope
//ใช้ let อยู่ภายใต้ {} จะเป็น  block scope
//เฉพาะ ่จาวาสคิป เว่อชั่น 6 เท่านั้น
//IE ใช้ไม่ได้เพราะเป็นเวอชั่น 5

var i
var i_1
var i_2

console.log(i);
for(let i_1=0;i_1<5;i_1++){
  console.log(i_1)
}
console.log('---------------------------')
  console.log(i);
for (let i_2 = 10; i_2 <15; i_2++){
  console.log(i_2);
}
