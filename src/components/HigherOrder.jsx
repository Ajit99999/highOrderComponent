import { useState } from "react";
const HigherOrder = function (Component) {
  function HighOrderFunction(props) {
    const [count, setCount] = useState(0);
    return (
      <Component
        count={count}
        setCount={() => {
          setCount(count + 1);
        }}
        {...props}
      />
    );
  }

  return HighOrderFunction;
};

export default HigherOrder;
