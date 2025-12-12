{
  // ハンバーガーメニュー
  document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('headerNav');
    const btn = document.querySelector('.nav-btn');
    const mask = document.getElementById('mask');
    const openClass = 'open';

    // menu open / close
    btn.addEventListener('click', function () {
      nav.classList.toggle(openClass);
    });

    // mask close
    mask.addEventListener('click', function () {
      nav.classList.remove(openClass);
    });
  });
}