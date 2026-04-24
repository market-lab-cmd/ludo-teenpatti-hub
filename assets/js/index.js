document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-page]").forEach((link) => {
    if (link.getAttribute("data-page") === currentPage) {
      link.classList.add("active");
    }
  });
});

// Google Analytics gtag.js
(function () {
  var GA_ID = 'G-T5PPQX5BDS';

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
})();