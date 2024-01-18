export default function hashNav(links: NodeList | null) {
  function handleClick(event: Event) {
    event.preventDefault();
    if (event.target && event.target instanceof HTMLAnchorElement) {
      console.log(event.target);
      const link = event.target.getAttribute('href');
      const element = link ? document.querySelector(link) : null;
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (links && links.length) {
    links.forEach((link) => {
      if (link instanceof HTMLAnchorElement)
        link.addEventListener('click', handleClick);
    });
  }
}
