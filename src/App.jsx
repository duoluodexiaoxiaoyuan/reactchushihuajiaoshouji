// import "./App.css";
import TimerView from "./pages/TimerView";
import { observer } from "mobx-react"
// const App = observer(() => {
//   return (
//     <div className="App">
//       <div>你好世界111</div>
//       <TimerView/>
//     </div>
//   );
// })
const App = () => {
  return (
    <div className="App">
      <div>你好世界111</div>
      <TimerView/>
    </div>
  );
}
export default App;
