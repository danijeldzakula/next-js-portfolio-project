import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCount } from "@/store/features/counterSlice";
import { useEffect } from "react";

interface Props {
  loading: boolean
}

export default function Counter({ loading }: Props) {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleReset = () => dispatch(reset());

  useEffect(() => {
    return () => { handleReset() }
  }, []);

  return (
    <div className='flex'>
      <button onClick={handleIncrement} aria-label="Increment value">+</button>
      <span className="value">Value: {count}</span>
      <button onClick={handleDecrement} aria-label="Decrement value">-</button>
    </div>
  );
}

