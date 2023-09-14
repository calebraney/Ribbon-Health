import { CountUp } from 'countup.js';

export const countUp = function (data) {
  const items = document.querySelectorAll('[cr-count-number]');
  items.forEach((item) => {
    const number = +item.textContent;
    if (!number || Number.isNaN(number)) return;
    decimalPoints = countDecimalPoints(number);
    const countUp = new CountUp(item, number, {
      useGrouping: false,
      decimalPlaces: decimalPoints,
      duration: 2.5,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'top 10%',
        scrub: 1,
        onEnter: () => {
          countUp.start();
        },
      },
    });
  });
};

function countDecimalPoints(number) {
  // Convert the number to a string
  const numberString = number.toString();
  // Split the string by the decimal point
  const parts = numberString.split('.');
  // If there are no decimal points, return 0
  if (parts.length === 1) {
    return 0;
  }
  // Return the length of the fractional part (number of decimal points)
  return parts[1].length;
}
