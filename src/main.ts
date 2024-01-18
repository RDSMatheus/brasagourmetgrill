import '../src/scss/style.scss';
import hashNav from './hashNav';
import menu from './menu';
import activeNavBar from './navBar';

const navbar = document.getElementById('nav-bar');
activeNavBar(navbar);

const links = document.querySelectorAll("a[href^='#']");
hashNav(links);

const menuButtons = document.querySelectorAll('#menu button');
menu(menuButtons, '.menu-itens');
