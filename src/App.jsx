import "./App.css";
import ClickEvent from "./components/ClickEvent";
import MouseEnterEvent from "./components/MouseEnter";
function App() {
  return (
    <div className="App">
      <ClickEvent eventName={"Click Event"} name={"Click"} />
      <MouseEnterEvent eventName={"Mouse Event"} name={"Mouse Enter"} />
    </div>
  );
}

export default App;
