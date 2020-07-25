import updateClockFace from './updateClockFace';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  startTimer() {
    const counterBlock = document.querySelector(this.selector);
    this.targetTime = new Date(this.targetDate);
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetTime - currentTime;
      updateClockFace(deltaTime);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 24, 2020'),
});

timer.startTimer();
