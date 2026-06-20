// Fiore Pilates — interações leves (sem dependências)
(function () {
  "use strict";

  // Header muda de estado ao rolar
  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 24) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Menu mobile
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.querySelector("[data-mobile-menu]");
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      menu.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // FAQ: garante apenas um aberto por grupo (acordeão suave)
  document.querySelectorAll("[data-faq]").forEach(function (group) {
    var items = group.querySelectorAll("details");
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (item.open) {
          items.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  });

  // Ano dinâmico no rodapé
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  // Carrossel da página de aniversário no tablet
  document.querySelectorAll("[data-anniversary-carousel]").forEach(function (carousel) {
    var slides = Array.prototype.slice.call(carousel.querySelectorAll("[data-anniversary-slide]"));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll("[data-anniversary-dot]"));
    var prev = carousel.querySelector("[data-anniversary-prev]");
    var next = carousel.querySelector("[data-anniversary-next]");
    var progress = carousel.querySelector("[data-anniversary-progress]");
    var delay = Number(carousel.getAttribute("data-anniversary-delay")) || 7000;
    var current = slides.findIndex(function (slide) { return slide.classList.contains("is-active"); });
    var timer = null;
    var paused = false;
    carousel.classList.add("is-enhanced");
    if (current < 0) current = 0;
    if (progress) progress.style.setProperty("--anniversary-delay", delay + "ms");

    var restartProgress = function () {
      if (!progress) return;
      progress.classList.remove("is-running");
      progress.offsetHeight;
      progress.classList.add("is-running");
    };

    var goTo = function (index) {
      if (!slides.length) return;
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        var active = i === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");
      });
      dots.forEach(function (dot, i) {
        var active = i === current;
        dot.classList.toggle("is-active", active);
        if (active) dot.setAttribute("aria-current", "step");
        else dot.removeAttribute("aria-current");
      });
      restartProgress();
    };

    var stop = function () {
      if (timer) window.clearInterval(timer);
      timer = null;
      if (progress) progress.classList.remove("is-running");
    };

    var start = function () {
      stop();
      if (slides.length < 2 || paused) return;
      restartProgress();
      timer = window.setInterval(function () { goTo(current + 1); }, delay);
    };

    var settleAfterControl = function (control) {
      if (control && typeof control.blur === "function") control.blur();
      if (window.innerWidth <= 900) {
        window.setTimeout(function () { window.scrollTo(0, 0); }, 0);
      }
    };

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goTo(i);
        settleAfterControl(dot);
        start();
      });
    });
    if (prev) prev.addEventListener("click", function () { goTo(current - 1); settleAfterControl(prev); start(); });
    if (next) next.addEventListener("click", function () { goTo(current + 1); settleAfterControl(next); start(); });

    carousel.addEventListener("mouseenter", function () { paused = true; stop(); });
    carousel.addEventListener("mouseleave", function () { paused = false; start(); });
    carousel.addEventListener("focusin", function () { paused = true; stop(); });
    carousel.addEventListener("focusout", function () { paused = false; start(); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    goTo(current);
    start();
  });

  // Conversão (GA4): cliques em WhatsApp e telefone, com origem do CTA
  var ctaSection = function (el) {
    var tagged = el.closest("[data-cta-section]");
    if (tagged && tagged.getAttribute("data-cta-section")) return tagged.getAttribute("data-cta-section");
    var scope = el.closest(".wa-float, .mobile-bar, .mobile-menu, header, footer, section");
    if (!scope) return "outro";
    if (scope.classList.contains("wa-float")) return "whatsapp_flutuante";
    if (scope.classList.contains("mobile-bar")) return "barra_mobile";
    if (scope.classList.contains("mobile-menu")) return "menu_mobile";
    if (scope.tagName === "HEADER") return "header";
    if (scope.tagName === "FOOTER") return "footer";
    return scope.id || (scope.classList.contains("hero") ? "hero" : "secao");
  };
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a || typeof window.gtag !== "function") return;
    var href = a.getAttribute("href") || "";
    if (href === "/bolao" || href.indexOf("/bolao") === 0) {
      window.gtag("event", "bolao_click", {
        cta_section: ctaSection(a),
        page_path: window.location.pathname
      });
    } else if (href.indexOf("wa.me") !== -1) {
      window.gtag("event", "whatsapp_click", {
        cta_section: ctaSection(a),
        cta_text: (a.textContent || "").trim().slice(0, 60),
        page_path: window.location.pathname
      });
    } else if (href.indexOf("tel:") === 0) {
      window.gtag("event", "phone_click", {
        cta_section: ctaSection(a),
        page_path: window.location.pathname
      });
    }
  });
})();
