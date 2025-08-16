/**
 * Throttle function to limit the rate at which a function can be called
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} - The throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Debounce function to delay the execution of a function until after a specified delay
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - The debounced function
 */
export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Throttle with leading and trailing options
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @param {Object} options - Options object
 * @param {boolean} options.leading - Whether to execute on the leading edge
 * @param {boolean} options.trailing - Whether to execute on the trailing edge
 * @returns {Function} - The throttled function
 */
export function throttleAdvanced(func, limit, { leading = true, trailing = true } = {}) {
  let inThrottle = false;
  let lastFunc;
  let lastRan;

  return function (...args) {
    const context = this;

    if (!inThrottle) {
      if (leading) {
        func.apply(context, args);
        lastRan = Date.now();
      }
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        if (trailing && lastFunc) {
          func.apply(context, lastFunc);
          lastFunc = null;
        }
      }, limit);
    } else {
      if (trailing) {
        lastFunc = args;
      }
    }
  };
}
