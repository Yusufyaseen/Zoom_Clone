import express from 'express';
import http from 'http'
import path from 'path'
import {Server} from 'socket.io'
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static('files'));
app.use(express.static('public'));

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`)
})

app.get('/:uid', (req, res) => {
    res.render('room', {roomId: req.params.uid});
})



io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit("user-connected");
    })
});
  

const PORT = 5000;  
app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )