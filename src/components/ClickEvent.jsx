import HigherOrder from "./HigherOrder";
const ClickEvent = ({ setCount, count, eventName, name }) => {
  return (
    <div>
      <p>Count : {count}</p>
      <p>{eventName}</p>
      <button onClick={setCount}> {name} </button>
    </div>
  );
};
export default HigherOrder(ClickEvent);
