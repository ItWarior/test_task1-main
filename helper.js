module.exports = {
  perf: (name, fn, args) => {
    const st = new Date().getTime();
    fn(...args);
    const end = new Date().getTime();
    console.log(`${name}::${end - st}`);
    return end - st;
  }
}