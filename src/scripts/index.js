import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './views/app';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  const app = new App({
    button: document.querySelector('.hamburger'),
    drawer: document.querySelector('.nav__menu'),
    content: document.querySelector('main'),
  });
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  window.addEventListener('load', () => {
    swRegister();
    app.renderPage();
  });
});
