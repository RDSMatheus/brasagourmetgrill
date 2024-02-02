export default function menuTouch(container: Element | null) {
  function handleTouch(event: TouchEvent, items: NodeList) {
    event.preventDefault();
    items.forEach((item) => {
      if (item instanceof HTMLElement) {
        item.classList.remove('ativo');
      }
    });
    if (event && event.target instanceof HTMLElement) {
      const targetElement = event.target as HTMLElement;
      setTimeout(() => {
        targetElement.classList.remove('ativo');
      }, 4000);
    }
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
