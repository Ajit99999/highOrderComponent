import HigherOrder from "./HigherOrder";

const MouseEnterEvent = ({ count, setCount, eventName, name }) => {
  return (
    <div>
      <p>Count : {count}</p>
      <p>{eventName}</p>
      <button onMouseEnter={setCount}> {name} </button>
    </div>
  );
};

export default HigherOrder(MouseEnterEvent);
