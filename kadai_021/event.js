const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  const clickText = document.getElementById('text')
  setTimeout(() => {
    clickText.textContent = 'ボタンをクリックしました';
  }, 2000);
});