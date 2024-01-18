import debounce from './debounce';

export default function activeNavBar(navBar: HTMLElement | null) {
  function handleNavBar() {
    if (navBar instanceof HTMLElement) {
      const windowHeight = window.scrollY;
      const { height } = navBar.getBoundingClientRect();
      const IsTopDistance = windowHeight - height > 0;
      if (IsTopDistance) {
        navBar.classList.add('ativo');
      } else {
        navBar.classList.remove('ativo');
      }
    }
  }
  const debouncedScroll = debounce(handleNavBar, 300);
  window.addEventListener('scroll', debouncedScroll);
}
