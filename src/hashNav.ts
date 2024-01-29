export default function hashNav(links: NodeList | null) {
  function handleClick(event: Event) {
    event.preventDefault();
    console.log(event.target);
    if (event.target && event.target instanceof HTMLAnchorElement) {
      console.log(event.target);
      const link = event.target.getAttribute('href');
      const element = link ? document.querySelector(link) : null;
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (links && links.length) {
    console.log(links);
    links.forEach((link) => {
      if (link instanceof HTMLAnchorElement)
        link.addEventListener('click', handleClick);
    });
  }

  const logo = document.querySelector('.logo') as HTMLImageElement | null;
  if (logo) {
    logo.addEventListener('click', (event) => {
      event.preventDefault();
      const link = '#home';
      const element = link ? document.querySelector(link) : null;
      element?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
