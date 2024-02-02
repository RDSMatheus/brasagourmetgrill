export default function menuTouch(container: Element | null) {
  function handleTouch(event: TouchEvent, items: NodeList) {
    event.preventDefault();
    items.forEach((item) => {
      if (item instanceof HTMLElement) {
        item.classList.remove('ativo');
      }
    });
    if (event && event.target instanceof HTMLButtonElement) {
      event.target.classList.add('ativo');
    }
  }
  if (container) {
    const items = container.querySelectorAll('div');
    items?.forEach((item) =>
      item.addEventListener('touchstart', (event) => {
        handleTouch(event, items);
      }),
    );
  }
}
