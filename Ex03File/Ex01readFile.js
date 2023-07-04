//파일 다루는 모듈
//fs : file system
const fs = require('fs')


// fs -> 콜백함수
fs.readFile('./File1.txt', (err, data)=> {
    //err : 파일 경로가 잘못되면 에러가 발생!

    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString());
    }
})