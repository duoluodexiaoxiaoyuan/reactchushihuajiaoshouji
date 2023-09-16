// TimerView.jsx

import { observer } from "mobx-react";

const TimerView = observer(({ timer }) => {
  return (
    <div>
      <span>Seconds passed: {timer.secondsPassed}</span>
      <button onClick={
        () => {
          console.log('点击了',timer.secondsPassed)
          timer.increaseTimer()
        }
      }>点击</button>
    </div>
  )
  });

export default TimerView;