import express from "express";
import { Server } from 'socket.io';
const app = express();

const server = app.listen(8000, () => console.log(`server up on PORT:${8000}`));

const io = new Server(server, {cors: true})

io.on("connection", socket => {
    console.log(socket.id);

    // listen for a client event
    socket.on("chat", (client_input) => {
        console.log("got a message", client_input);

        // emit this back to the client / everyone
        io.emit('post chat', client_input)
    })
})

