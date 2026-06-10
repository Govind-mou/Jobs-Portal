import { io } from "socket.io-client";

const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL ||
  "http://localhost:5000";

class SocketService {
  constructor() {
    this.socket = null;
    this.connected = false;
  }

  connect(token) {
    if (this.socket?.connected) {
      return this.socket;
    }

    this.socket = io(SOCKET_URL, {
      auth: {
        token,
      },

      autoConnect: true,

      transports: ["websocket"],

      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,

      timeout: 20000,
    });

    this.registerCoreEvents();

    return this.socket;
  }

  registerCoreEvents() {
    this.socket.on("connect", () => {
      this.connected = true;

      console.log(
        "✅ Socket Connected:",
        this.socket.id
      );
    });

    this.socket.on("disconnect", (reason) => {
      this.connected = false;

      console.log(
        "❌ Socket Disconnected:",
        reason
      );
    });

    this.socket.on("connect_error", (error) => {
      console.error(
        "🚨 Socket Error:",
        error.message
      );
    });

    this.socket.on("reconnect", (attempt) => {
      console.log(
        `🔄 Reconnected (${attempt})`
      );
    });

    this.socket.on(
      "reconnect_attempt",
      (attempt) => {
        console.log(
          `Trying reconnect ${attempt}`
        );
      }
    );
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.connected = false;
    }
  }

  emit(event, payload) {
    if (!this.socket?.connected) {
      console.warn(
        `Socket not connected: ${event}`
      );
      return;
    }

    this.socket.emit(event, payload);
  }

  on(event, callback) {
    this.socket?.on(event, callback);
  }

  off(event, callback) {
    this.socket?.off(event, callback);
  }

  joinRoom(roomId) {
    this.emit("join-room", { roomId });
  }

  leaveRoom(roomId) {
    this.emit("leave-room", { roomId });
  }

  isConnected() {
    return this.connected;
  }

  getSocket() {
    return this.socket;
  }
}

const socketService =
  new SocketService();

export default socketService;