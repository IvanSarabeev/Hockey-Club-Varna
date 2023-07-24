const tabButtons = document.querySelectorAll('.tab-button');
const tabItems = document.querySelectorAll('.tab-item');

tabButtons.forEach(button => button.addEventListener('click', e => {
  const tabName = e.target.dataset.tab;
  const currentTab = document.querySelector(`.tab-item[id="${tabName}"]`);
  
  tabButtons.forEach(button => button.classList.remove('active'));
  tabItems.forEach(item => item.classList.remove('active'));
  
  e.target.classList.add('active');
  currentTab.classList.add('active');
}));
