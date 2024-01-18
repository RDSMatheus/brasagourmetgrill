interface Callback {
  (): void;
}
export default function debounce(callback: Callback, delay: number) {
  let timer: NodeJS.Timeout | null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  };
}
