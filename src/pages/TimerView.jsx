// TimerView.jsx
import { useTimerStore } from "../store/timer";
import { observer } from "mobx-react";

// const TimerView = () => {
//   const timer = useTimerStore();
//   return <div>
//     <span>Seconds passed: {timer.secondsPassed}</span>
//     <button onClick={
//       () => {
//         console.log('点击了',timer.secondsPassed)
//         timer.increaseTimer()
//       }
//     }>点击</button>
//   </div>
// };

const TimerView = observer(() => {
  const timer = useTimerStore();
  return <div>
    <span>Seconds passed: {timer.secondsPassed}</span>
    <button onClick={
      () => {
        console.log('点击了',timer.secondsPassed)
        timer.increaseTimer()
      }
    }>点击</button>
  </div>
});

export default TimerView;