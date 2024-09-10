import { AppDispatch } from "@/store/store";
import { setWebSocketUrl, setWebSocketConnection } from "./websocketSlice";

export const connectWebSocket =
  (url: string) => async (dispatch: AppDispatch) => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      dispatch(setWebSocketUrl(url));
      dispatch(setWebSocketConnection(socket));
    };

    socket.onmessage = (event) => {
      // Handle incoming messages
    };

    socket.onerror = (error) => {
      // Handle WebSocket errors
    };

    socket.onclose = (event) => {
      // Handle WebSocket connection closure
    };
  };
