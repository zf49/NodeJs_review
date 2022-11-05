const { EventEmitter } = require("events");

const event = new EventEmitter()


event.on("play",(data)=>{
    console.log("出啊了",data)
})



// event.emit("play")


setTimeout(()=>{
    event.emit("play","11111111")

},5000)