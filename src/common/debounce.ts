export default function debounce(fn: (...args: unknown[]) => unknown, delay: number) {
  let timeout: NodeJS.Timeout;
  function wrappedFunc(...args: unknown[]) {
    const fnCall = () => { fn.apply(this, args); };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, delay);
  }
  return wrappedFunc;
}
