import pad from './pad';

export default function updateClockFace(time) {
  const date = new Date(time);

  const refs = {
    daysCounter: document.querySelector('span[data-value="days"'),
    hoursCounter: document.querySelector('span[data-value="hours"'),
    minsCounter: document.querySelector('span[data-value="mins"'),
    secsCounter: document.querySelector('span[data-value="secs"'),
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
