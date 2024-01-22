import '../src/scss/style.scss';
import hashNav from './hashNav';
import menu from './menu';
import menuHamburguer from './menuHamburguer';
import activeNavBar from './navBar';

const navbar = document.getElementById('nav-bar');
activeNavBar(navbar);

const links = document.querySelectorAll("a[href^='#']");
hashNav(links);

const menuButtons = document.querySelectorAll('#menu button');
menu(menuButtons, '.menu-itens');

const mobileButtonOpen =
  document.querySelector<HTMLButtonElement>('#btn-mobile-open');
const mobileButtonClose =
  document.querySelector<HTMLButtonElement>('#btn-mobile-close');
const container = document.querySelector<HTMLElement>('#nav-mobile');
menuHamburguer(mobileButtonOpen, mobileButtonClose, container);
