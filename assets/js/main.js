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

  document.querySelectorAll('.nav-menu a[href]').forEach(function (el) {
    el.addEventListener('click', function (event) {
      document.querySelector('.nav-btn').click();
    });
  });

  // ふわっと表示
  document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.js-fade');

    const options = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
        } else {
          entry.target.classList.remove('is-active');
        }
      });
    }, options);

    targets.forEach(target => observer.observe(target));
  });

}