// 注意scope 使用let跟var的差異 
for (let i=1; i<=5; i++) {
  setTimeout(() => console.log(i), 1000 * i);
  console.log(i)
}

// 注意執行順序
console.log("start");
(function (time){
  setTimeout(()=>{
    console.log("mid")
  }, time);
})(0);
console.log("end")

// this case1
let getGender = function(){
  return this.gender;
};

let people1 = {
  gender:"female",
  getGender:getGender
};

let people2 = {
  gender:"male",
  getGender:getGender
};

console.log(people1.getGender());
console.log(people2.getGender());

// this case2
let foo = function(){
  this.count++;
};

foo.count = 0;

for (var i=1; i<=5; i=i+1){
  foo();
}
console.log(foo.count);

// this case3
var foo = 'foo'; // 注意這裡使用let和var結果會不太一樣
let obj = {
  foo: 'foo in Object'
};

let sayFoo = function() {
  console.log( this.foo );
};

obj.sayFoo = sayFoo;

obj.sayFoo();   
sayFoo();       

// this 不是 function 本身
// this 也不是 function 的 scope
// this 與 function 在何處被宣告完全無關，而是取決於 function 被呼叫的方式
// this 指的是，當 function 執行時，這個 scope 的 owner
// 當 function 是某個物件的 method，this 指的就是上層物件
// 全域變數的上層物件就是 window
