import './styles.scss';

const homeEl = document.getElementsByClassName('home-page')[0];
const resumeEl = document.getElementsByClassName('resume-page')[0];

document.getElementById('resume-button').onclick = (_) => {
  hide(homeEl);
  show(resumeEl);
};

document.getElementById('home-button').onclick = (_) => {
  show(homeEl);
  hide(resumeEl);
};

const hide = (el: Element) => {
  el.classList.remove('fade-in');
  el.classList.add('fade-out');
  setTimeout(() => el.classList.add('hide'), 500);
};

const show = (el: Element) => {
  el.classList.add('fade-in');
  el.classList.remove('fade-out');
  setTimeout(() => el.classList.remove('hide'), 500);
};
