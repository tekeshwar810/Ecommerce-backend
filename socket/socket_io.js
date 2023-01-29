
function chat(io){
    io.on('connection', (socket) => {
        console.log('sokect connected...',socket.id)
		

        socket.on("fetchMovies",(()=>{
            console.log('runig')
            socket.emit('getMovies','moviees list get on frontend')
        }))  
        
        socket.on('create-room',(data)=>{
            console.log('room',data)
            const userIdsAry = Object.values(data);
            console.log('121',userIdsAry)

        })


    });
   
    // {
    // io.on('connect', (Socket) => { 
    //     Socket.emit('userid',Socket.id)
    //     Socket.broadcast.emit('message',`this user connect now ${Socket.id}`) // when user connect socket then send other user msg but not send message  own

    //     Socket.on('msg',(data)=>{ //Socket.on() recieve the data from frontend 
    //         console.log(data)
    //         io.emit('msg',data+'send') //io.emit() send the data from backend
    //     })

    //     Socket.on('send-msg',(Msg,room)=>{
    //         console.log(Socket.id)
    //         if(room === ""){
    //             Socket.broadcast.emit('send-msg',Msg) // Socket.broadcast.emit() send the data all connect user but not send own
    //         }else{
    //             console.log(Msg,room,'runfds') 
    //             Socket.to(room).emit('send-msg',Msg) // Socket.to('room-name').emit() send the data which connect the same room but not get the data own
    //             // io.to('room-name').emit() send the data which connect the same room but get data own
    //         }
    //     })
    //     Socket.on('room-join',(name_room)=>{
    //         Socket.join(name_room)
    //         io.emit('room-join',name_room)
    //     })

    //     Socket.on('Typing',(obj)=>{
    //         console.log(obj)
    //         Socket.to(obj.room_name).emit('Typing',obj,Socket.id)
            
    //     })

    //     Socket.on('disconnect',()=>{
    //         io.emit('message',`this user left the chat :- ${Socket.id}`)
    //     })
    // }); 
    // }
}

module.exports = chat