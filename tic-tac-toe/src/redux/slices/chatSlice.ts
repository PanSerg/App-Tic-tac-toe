import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ChatMessage {
  id: string;
  sender: "X" | "0";
  text: string;
  timestamp: number;
}

interface ChatState {
  messages: ChatMessage[];
}

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (
      state,
      action: PayloadAction<{ sender: "X" | "0"; text: string }>
    ) => {
      const newMessage: ChatMessage = {
        sender: action.payload.sender,
        text: action.payload.text,
        timestamp: Date.now(),
        id: crypto.randomUUID(),
      };
      state.messages.push(newMessage);
    },
    clearChat: (state) => {
      state.messages = [];
    },
  },
});

export const { sendMessage, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
