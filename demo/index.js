let taskId = 1;

function workLoop(deadline) {
  taskId++;
  console.log(deadline.timeRemaining())

  let shouldYield = false;
  if (!shouldYield) {
    // run task
    // dom render
    shouldYield = deadline.timeRemaining() < 1;
  }

  requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)