import { useAppDispatch, useAppSelector } from '@redux/dispatcher';
import { increment, decrement } from './slice';
import { Button, Typography } from '@mui/material';


const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
      <div>
        <Typography variant="h4" component="h1" gutterBottom>
          Count: {count}
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button variant="contained" color="secondary" sx={{ml: '1rem'}} onClick={() => dispatch(increment())}>
          Increment
        </Button>
      </div>
  );
};

export default Counter;