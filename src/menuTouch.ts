export default function menuTouch(container: Element | null) {
  let timeout: NodeJS.Timeout | null = null;

  function handleTouch(event: TouchEvent, items: NodeList) {
    event.preventDefault();
    items.forEach((item) => {
      if (item instanceof HTMLElement) {
        item.classList.remove('ativo');
      }
    });
    const targetElement = event.target as HTMLElement;
    targetElement.classList.add('ativo');

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      targetElement.classList.remove('ativo');
    }, 4000);
  }

  if (container) {
    const items = container.querySelectorAll('div');
    items?.forEach((item) =>
      item.addEventListener('touchend', (event) => {
        handleTouch(event, items);
      }),
    );
  }
}
