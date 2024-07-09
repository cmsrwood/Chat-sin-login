const express = require ("express")
const app = express()
const http = require('http')
const cors = require('cors')
const { FRONTEND_URL, BACKEND_URL, BACKEND_PORT } = require("./config.js");

app.use(cors())
const server = http.createServer(app)

const {Server} = require('socket.io')

const io = new Server(server, {
    cors: {
        origin: FRONTEND_URL,
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    console.log(`User with ID: ${socket.id} has connected`)

    socket.on('join_room', (data) => {
        socket.join(data)
        console.log(`User with ID: ${socket.id} joined room: ${data}`)
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data)
      });

    socket.on('disconnect', () => {
        console.log ("User disconnected: ",socket.id)
    })
})

server.listen (BACKEND_PORT, () => {
    console.log(`Server has started on port ${BACKEND_PORT}`)
})

