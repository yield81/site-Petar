/* Камчия Ретрийт — минимален JS.
   Страницата работи и без него: всички секции са видими по подразбиране,
   а класът .js включва скриването едва когато има кой да го върне. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* --- поява на секциите --- */
  var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  // лек stagger само в рамките на един родител, за да не поникват всички наведнъж
  items.forEach(function (el) {
    var sibs = Array.prototype.filter.call(
      el.parentElement ? el.parentElement.children : [],
      function (n) { return n.classList && n.classList.contains("reveal"); }
    );
    el.style.setProperty("--i", String(Math.min(sibs.indexOf(el), 4)));
  });

  if (!("IntersectionObserver" in window) || reduce.matches) {
    items.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* --- hero видео: включва се само ако файлът е наличен и е ок да се движи --- */
  var video = document.querySelector(".hero__video");
  if (video) {
    var hero = video.closest(".hero");
    var drop = function () {
      if (video.parentNode) video.parentNode.removeChild(video);
    };

    if (reduce.matches) {
      drop(); // при reduced-motion остава само постерът
    } else {
      video.addEventListener("canplay", function () {
        video.play().then(function () {
          if (hero) hero.classList.add("is-video");
        }).catch(function () {
          drop(); // autoplay блокиран или кодекът не се поддържа — остава постерът
        });
      }, { once: true });

      video.addEventListener("error", drop, { once: true });

      // не харчим батерия, когато табът не се гледа
      document.addEventListener("visibilitychange", function () {
        if (!hero || !hero.classList.contains("is-video")) return;
        if (document.hidden) video.pause();
        else video.play().catch(function () {});
      });
    }
  }

  /* --- годината във футъра --- */
  var y = document.getElementById("godina");
  if (y) y.textContent = String(new Date().getFullYear());

  /* --- състояние на формата --- */
  var form = document.querySelector('form[name="zapitvane"]');
  if (form) {
    form.addEventListener("submit", function () {
      var btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      btn.disabled = true;
      btn.textContent = "Изпращаме…";
    });
  }
})();
