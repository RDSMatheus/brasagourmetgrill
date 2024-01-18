export default function menu(buttons: NodeList | null, container: string) {
  const item0 = buttons ? (buttons[0] as HTMLButtonElement | null) : null;
  const allMenuItems = document.querySelectorAll(`${container} div`);

  function showMenuItem(item: string) {
    allMenuItems.forEach((item) => item.classList.remove('ativo'));
    const menuItem = document.querySelector(`.${item}`);
    menuItem?.classList.add('ativo');
  }

  if (item0) {
    item0.classList.add('ativo');
    const itemContainer = item0.dataset.item;
    itemContainer && showMenuItem(itemContainer);
  }
  function handleClick(event: Event) {
    buttons?.forEach((button) => {
      if (button instanceof HTMLButtonElement) {
        button.classList.remove('ativo');
      }
    });

    if (event && event.target instanceof HTMLButtonElement) {
      event.target.classList.add('ativo');
      const itemContainer = event.target.dataset.item;
      itemContainer && showMenuItem(itemContainer);
    }
  }

  if (buttons && buttons.length) {
    buttons.forEach((button) => {
      if (button instanceof HTMLButtonElement) {
        button.addEventListener('click', handleClick);
      }
    });
  }
}
