import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ChatMessage {
  id: string;
  sender: "X" | "0";
  text: string;
  timestamp: number;
  time: string;
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
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    clearChat: (state) => {
      state.messages = [];
    },
    resetChat: () => ({ messages: [] }),
  },
});

export const { addMessage, clearChat, resetChat } = chatSlice.actions;
export default chatSlice.reducer;
