import {useContext} from 'react'
import {CounterContext} from "../App.tsx";

export default function CounterComponent() {
  const counter = useContext(CounterContext);

  return (
    <button onClick={() => {
      counter?.setCount((count) => count + 1);
    }}>
      count is {counter?.count}
    </button>
  )
}