const socketIO = require('socket.io')
                    //express server
module.exports = (server) =>{
    //express server 연결할 수 있도록 도와줌, 클라이언트가 접속할 경로 설정
    const io = socketIO(server, {path : '/socket.io'})

    //클라이언트가 접속했을 때 (connection) => 해당 클라이언트와 통신할 수 있는 소켓객체 생성
    io.on('connection', (socket)=>{
        console.log('새로운 클라이언트 접속!', socket.id);

        //연결 해제
        socket.on('disconnect', ()=>{
            console.log('클라이언트 접속 해제!', socket.id);
        })
        socket.on('error', (error)=>{
            console.log(error);

        })
        //클라이언트의 메시지 받을 때
        socket.on('reply', (data)=>{
            console.log(data); // data : 클라이언트가 보낸 메시지
        })
        //서버쪽에서 먼저 이벤트 발생 (3초마다 메시지 보내기!)
        socket.interval = setInterval(()=>{
            socket.emit('news', 'Hello Socket.io') //emit : 이벤트{Key value} 발생

        }, 3000)
    })
} // 서버에 대한 내용을 넘겨줘서 사용