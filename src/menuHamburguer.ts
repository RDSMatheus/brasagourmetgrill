export default function menuHamburguer(
  buttonOpen: HTMLButtonElement | null,
  buttonClose: HTMLButtonElement | null,
  container: HTMLElement | null,
) {
  function handleClick(event: MouseEvent) {
    const ul =
      event.currentTarget instanceof HTMLElement
        ? event.currentTarget.querySelector('ul')
        : null;
    console.log(event.target !== event.currentTarget && event.target !== ul);

    if (event.target !== event.currentTarget && event.target !== ul) {
      closeMenu();
    }
    console.log('clicou');
  }

  function closeMenu() {
    container?.classList.remove('ativo');
  }

  function openMenu(event: MouseEvent) {
    console.log(event.target, event.currentTarget);
    console.log('clicou');
    container?.classList.add('ativo');
  }

  if (buttonOpen && buttonOpen instanceof HTMLButtonElement) {
    buttonOpen.addEventListener('click', openMenu);
  }
  if (buttonClose && buttonClose instanceof HTMLButtonElement) {
    buttonClose.addEventListener('click', closeMenu);
  }
  if (container && container instanceof HTMLElement) {
    container.addEventListener('click', handleClick);
  }
}
