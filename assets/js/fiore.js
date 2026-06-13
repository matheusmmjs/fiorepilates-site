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
