import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectWebSocket } from "@/store/features/websocketThunks";

const WebSocketComponent: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    connectWebSocket("wss://localhost:6100");
    return () => { };
  }, [dispatch]);

  return null;
};

export default WebSocketComponent;
