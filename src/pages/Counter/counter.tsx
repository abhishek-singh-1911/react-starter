import { useAppDispatch, useAppSelector } from '@redux/dispatcher';
import { increment } from './slice';


const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
      <div>
          <p>Count: {count}</p>
          <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
  );
};

export default Counter;