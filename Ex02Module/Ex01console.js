console.log('일반 로그');
console.error('에러 메시지');
console.table([{name: '천현민', age: '20'}, {name: "천현민",  age : '18'}])

console.time('timer1')
for(let i=0; i<1000000; i++){

}
console.timeEnd('timer1')