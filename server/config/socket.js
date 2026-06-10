import { Server } from "socket.io";

let io;

export const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log(
      `User Connected: ${socket.id}`
    );

    socket.on("join-room", (roomId) => {
      socket.join(roomId);
      console.log(
        `${socket.id} joined ${roomId}`
      );
    });

    socket.on("send-message", (data) => {
      io.to(data.roomId).emit(
        "receive-message",
        data
      );
    });

    socket.on("notification", (data) => {
      io.emit("new-notification", data);
    });

    socket.on("disconnect", () => {
      console.log(
        `User Disconnected: ${socket.id}`
      );
    });
  });

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error(
      "Socket.io not initialized"
    );
  }

  return io;
};