function regularFunction(name) {
  console.log(`This is a new execution of ${name}'s debounced function.`);
}

// To achieve the debounce effect you just need:
//   1. execute function after a delay
//   2. reset the timer if the function is called again.
//   In JS it's done with setTimeout and closures
function debounce(func, delay) {
  let timeout = null
  // console.log(timeout)

  // Closure remembers the timeout value above for future executions.
  // You can check this behavior with console log.
  return (...args) => {
    // If a valid timer was set before, clear it...
    if (timeout) { clearInterval(timeout) }

    // and set a new one.
    timeout = setTimeout(
      () => { func(...args) },
      delay
    );
  }
}

const debouncedFunction = debounce(regularFunction, 3000)

debouncedFunction('Eric')

// Fully explained in https://www.freecodecamp.org/news/deboucing-in-react-autocomplete-example/
