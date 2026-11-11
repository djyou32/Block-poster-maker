const searchArea = document.querySelector('.search-area');
const search = document.querySelector('#resource-search');
const sections = [...document.querySelectorAll('[data-category]')];
const buttons = [...document.querySelectorAll('[data-filter]')];
let active = 'all';
function filter() {
  const query = search.value.toLocaleLowerCase().trim();
  let count = 0;
  for (const section of sections) {
    let visible = 0;
    for (const resource of section.querySelectorAll('.resource')) {
      const match = (active === 'all' || section.dataset.category === active) && resource.textContent.toLocaleLowerCase().includes(query);
      resource.hidden = !match;
      if (match) visible++;
    }
    section.hidden = visible === 0;
    count += visible;
  }
  document.querySelector('#result-count').textContent = `${count} resource${count === 1 ? '' : 's'}`;
  document.querySelector('.empty').hidden = count > 0;
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === active)));
}
searchArea.hidden = false;
search.addEventListener('input', filter);
buttons.forEach(button => button.addEventListener('click', () => { active = button.dataset.filter; filter(); }));
document.querySelectorAll('.sidebar nav a').forEach(link => link.addEventListener('click', () => {
  active = 'all';
  search.value = '';
  filter();
}));
