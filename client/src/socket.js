import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
  updateConversation
} from "./store/conversations";

const socket = io(window.location.origin);

const { dispatch } = store

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    dispatch(removeOfflineUser(id));
  });
  socket.on("new-message", (data) => {
    dispatch(setNewMessage(data.message, data.sender));
  });

  socket.on("message-updated", (conversation) => {
    console.log("===========================================")
    console.log("MESSAGE UPDATED", conversation)
    dispatch(updateConversation(conversation))
  });
});

export default socket;
