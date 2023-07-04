//~초(ms 1s->1000) 후에 실행하겠다
setTimeout(()=>{
    console.log('3초후 실행');
}, 1000)

//~초 마다 계속 실행
setInterval(()=>{
    console.log('2초마다 실행')
},2000)


//5초후에           interval 멈추기(=> 함수로 정의)
setTimeout(()=>{
    clearInterval(interval)
}, 5000)


//무조건 즉시 실행!
setImmediate(()=>{
    console.log('즉시 실행!');
})