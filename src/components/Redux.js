import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, incrementByamount } from "./counter";

const Redux = () => {
  // here we destruct the conunt from counter reducer that is stored in our store from slice. Here useSelector is used to select the specific value from a reducer that is stored in the configureStorage.
  const { count } = useSelector((state) => state.counter);
  // this use dispatch hook is used to dispatch specific acton that is defined in the reducers and according this action we can update our state.
  const dispatch = useDispatch();

  // another way to get this value and here variable const count canbe any nmae and if we use this we shoud configure according this variable name.
  //   const count = useSelector((state) => state.counter.count);
  //   console.log(count);

  return (
    <div>
      <h1>This is count {count} </h1>
      <button onClick={() => dispatch(increment())}>counter :1</button>
      <button onClick={() => dispatch(decrement())}>counter :2</button>
      <button onClick={() => dispatch(incrementByamount(5))}>
        increment by payload
      </button>
    </div>
  );
};

export default Redux;
