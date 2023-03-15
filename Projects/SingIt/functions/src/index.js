import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as WebSocket from "ws";

admin.initializeApp();

const wss = new WebSocket.Server({ port: 5000 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.send("Hello, World!"); // 클라이언트로 메시지 보내기

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

export const acoustic = functions.https.onRequest((req, res) => {
  res.send("Acoustic function is running!");
});
