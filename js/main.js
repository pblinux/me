document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Hide the "·" separator when it lands at the end of a wrapped line
const items = [...document.querySelectorAll('.role .item')];
const markLineEnds = () => {
  items.forEach((item, i) => {
    const sep = item.querySelector('.sep');
    const next = items[i + 1];
    if (sep && next) sep.classList.toggle('is-eol', next.offsetTop !== item.offsetTop);
  });
};
if (items.length) {
  markLineEnds();
  addEventListener('resize', markLineEnds);
  document.fonts?.ready.then(markLineEnds);
}
