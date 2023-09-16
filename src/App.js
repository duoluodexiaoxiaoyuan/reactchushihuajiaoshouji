import { observer } from "mobx-react";
import "./App.css";
import TimerView from "./pages/TimerView";
import Timer from "./store/timer";

const timer = new Timer();
const App = observer(() => {
  return (
    <div className="App">
      <div>你好世界</div>
      <TimerView timer={timer} /> 
    </div>
  );
})

export default App;
