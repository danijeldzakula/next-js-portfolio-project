import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type WebSocketState = {
  url: string | null;
  connection: WebSocket | null;
};

const initialState: WebSocketState = {
  url: null,
  connection: null,
};

const websocketSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    setWebSocketUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setWebSocketConnection: (state, action: PayloadAction<WebSocket | null>) => {
      state.connection = action.payload;
    },
  },
});

export const { setWebSocketUrl, setWebSocketConnection } = websocketSlice.actions;

export default websocketSlice.reducer;
