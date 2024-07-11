import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="+" />
      <Button onClick={setToZero} text="Set to 0" />
    </div>
  );
};

export default App;
