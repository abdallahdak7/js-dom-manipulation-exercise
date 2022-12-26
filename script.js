const person1 = {
  name: 'Alice',
  greet: function (greeting) {
    return greeting + ' ' + this.name;
  },
};
const person2 = { name: 'Bob' };

person2.greet = person1.greet.bind(person2);
// console.log(person2.greet("Hello")); // "Hello Bob"

function debounce(fn, time) {
  let timeoutId;

  return function () {
    if (timeoutId) return;

    timeoutId = setTimeout(() => {
      const _this = this;
      console.log(_this);
      fn.apply(this, arguments);
      console.log('finally');
      timeoutId = null;
    }, time);
  };
}
const debounceFn = debounce(() => console.log('hello'), 4000);
// debounceFn();
function moveElement(element, duration, distance) {
  // Set the element's initial position
  element.style.transform = `translateX(0)`;

  // Use requestAnimationFrame to animate the element
  let startTime = null;
  function animate(currentTime) {
    console.log(`current time :${currentTime}`);
    if (startTime === null) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    console.log(`elapsed time: ${elapsedTime}`);
    const progress = Math.min(elapsedTime / duration, 1);
    console.log(`progress: ${progress}`);
    element.style.transform = `translateX(${distance * progress}px)`;
    if (progress < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

// Example usage:
const element = document.querySelector('#circle');
moveElement(element, 10000, 100); // Moves the element 100 pixels to the right over 1 second
