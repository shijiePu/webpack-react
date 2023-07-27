const runner = (fn, parallelNum) => {
  const queue = [];
  let running = 0;

  const runTask = () => {
    running++;
    const task = queue.shift();
    if (!task) {
      running--;
      return;
    }
    running--;
    runTask(); // 继续运行下一个任务
  };
  const addTask = async (...args) => {
    queue.push(() => fn(...args));
    if (running < parallelNum) {
      runTask();
    }
  };
  return addTask;
};
