import pad from './pad';
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  startTimer() {
    this.targetTime = new Date(this.targetDate);
    const counterBlock = document.querySelector(this.selector);
    function updateClockFace(time) {
      // const date = new Date(time);

      const refs = {
        daysCounter: counterBlock.querySelector('span[data-value="days"'),
        hoursCounter: counterBlock.querySelector('span[data-value="hours"'),
        minsCounter: counterBlock.querySelector('span[data-value="mins"'),
        secsCounter: counterBlock.querySelector('span[data-value="secs"'),
      };

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      refs.daysCounter.textContent = days;
      refs.hoursCounter.textContent = hours;
      refs.minsCounter.textContent = mins;
      refs.secsCounter.textContent = secs;
    }
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetTime - currentTime;
      updateClockFace(deltaTime);
    }, 1000);
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 1, 2020'),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Aug 21, 2020'),
});

timer1.startTimer();
timer2.startTimer();
