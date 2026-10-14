// Fiore Pilates 2.0, interações leves (vanilla, sem dependências, carregado com defer)
// Regra de ouro: o conteúdo é visível sem JS. Este arquivo só adiciona movimento e conforto.
// ---------------------------------------------------------------
// Consentimento (LGPD) e análise: GA4 + Microsoft Clarity só carregam com "Aceitar".
// Escolha em localStorage["fiore-consent"] = "granted" | "denied" (+ "fiore-consent-date").
// Sem escolha ou com "denied": nenhum script de terceiros é pedido. Ver /privacidade.
// ---------------------------------------------------------------
(function () {
  "use strict";

  var GA_ID = "G-GN6B6NJNKL";
  var CLARITY_ID = "y9u625nnoh";
  var KEY = "fiore-consent";
  var KEY_DATE = KEY + "-date";

  var read = function () {
    try {
      var v = window.localStorage.getItem(KEY);
      return v === "granted" || v === "denied" ? v : null;
    } catch (e) { return null; }
  };
  var write = function (value) {
    try {
      window.localStorage.setItem(KEY, value);
      window.localStorage.setItem(KEY_DATE, new Date().toISOString().slice(0, 10));
    } catch (e) { /* storage bloqueado: vale só para esta visita */ }
  };

  var choice = read();
  var loaded = false;

  // Stub seguro: os eventos (whatsapp_click, phone_click) nunca lançam erro e são descartados sem consentimento.
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { /* sem consentimento: descarta */ };

  var addScript = function (src) {
    var s = document.createElement("script");
    s.async = true;
    s.src = src;
    document.head.appendChild(s);
  };

  var loadAnalytics = function () {
    if (loaded) return;
    loaded = true;

    // Google Analytics 4 com Consent Mode v2 (anúncios sempre negados)
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    window.gtag("consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    addScript("https://www.googletagmanager.com/gtag/js?id=" + GA_ID);
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });

    // Microsoft Clarity
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    addScript("https://www.clarity.ms/tag/" + CLARITY_ID);
    window.clarity("consent");
  };

  // Ao revogar, apaga os cookies de análise (melhor esforço) antes de recarregar
  var clearTrackingCookies = function () {
    var host = window.location.hostname;
    var domains = ["", host, "." + host];
    var parts = host.split(".");
    if (parts.length > 2) domains.push("." + parts.slice(-3).join("."), "." + parts.slice(-2).join("."));
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (!/^(_ga|_gid|_gat|_clck|_clsk|CLID|ANONCHK|SM|MR|MUID|SRM_)/.test(name)) return;
      domains.forEach(function (d) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + (d ? "; domain=" + d : "");
      });
    });
  };

  // ---- Aviso de cookies (injetado aqui para ficar igual em todas as páginas) ----
  var banner = null;
  var opener = null;

  var build = function () {
    banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Aviso de cookies");
    banner.hidden = true;

    var text = document.createElement("p");
    text.className = "cookie-banner__text";
    text.appendChild(document.createTextNode("Usamos cookies de análise para entender como o site é usado e melhorar a sua experiência. Você escolhe. "));
    var link = document.createElement("a");
    link.href = "/privacidade";
    link.textContent = "Política de privacidade";
    text.appendChild(link);

    var actions = document.createElement("div");
    actions.className = "cookie-banner__actions";
    [["denied", "Recusar"], ["granted", "Aceitar"]].forEach(function (o) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "btn btn--ghost";
      b.setAttribute("data-consent", o[0]);
      b.textContent = o[1];
      b.addEventListener("click", function () { decide(o[0]); });
      actions.appendChild(b);
    });

    banner.appendChild(text);
    banner.appendChild(actions);
    document.body.appendChild(banner);
    banner.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && choice) hide(true); // só fecha sem escolher se já houver escolha
    });
  };

  var show = function (focus) {
    if (!banner) build();
    banner.hidden = false;
    if (focus) {
      var first = banner.querySelector("button");
      if (first) first.focus();
    }
  };

  var hide = function (restoreFocus) {
    if (banner) banner.hidden = true;
    if (restoreFocus && opener && document.contains(opener)) opener.focus();
    opener = null;
  };

  var decide = function (value) {
    var wasGranted = loaded;
    choice = value;
    write(value);
    hide(true);
    if (value === "granted") {
      loadAnalytics();
    } else if (wasGranted) {
      clearTrackingCookies();
      window.location.reload(); // para os rastreadores já carregados
    }
  };

  document.addEventListener("click", function (e) {
    var t = e.target && e.target.closest ? e.target.closest("[data-cookie-prefs]") : null;
    if (!t) return;
    e.preventDefault();
    opener = t;
    show(true);
  });

  if (choice === "granted") loadAnalytics();
  var start = function () { if (!choice) show(false); };
  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start);
})();

(function () {
  "use strict";

  var doc = document.documentElement;
  var mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var reduceMotion = function () { return mqReduce.matches; };
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  var hasIO = "IntersectionObserver" in window;
  var raf = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 16); };

  // ---------------------------------------------------------------
  // 0. Classe .js: só então os elementos .reveal ficam escondidos.
  //    O que já está na tela é marcado como visível antes, para não piscar.
  // ---------------------------------------------------------------
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal, .reveal-clip"));
  var vh = window.innerHeight || 800;
  revealEls.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
  });
  doc.classList.add("js");

  if (hasIO && revealEls.length) {
    // Elementos com clip-path são observados pelo pai (o recorte zera a área visível)
    var watched = [];
    var targetsOf = function (node) {
      return watched.filter(function (w) { return w.node === node; }).map(function (w) { return w.el; });
    };
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          targetsOf(entry.target).forEach(function (el) { el.classList.add("in"); });
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) {
      if (el.classList.contains("in")) return;
      var node = el.classList.contains("reveal-clip") && el.parentElement ? el.parentElement : el;
      watched.push({ node: node, el: el });
      revealIO.observe(node);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // ---------------------------------------------------------------
  // 1. Header: sólido ao rolar, esconde ao descer e volta ao subir
  // ---------------------------------------------------------------
  var header = document.querySelector("[data-header]");
  var lastY = window.scrollY;
  var menuOpen = false;
  var onScrollHeader = function () {
    if (!header) return;
    var y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 24);
    var goingDown = y > lastY + 4;
    var goingUp = y < lastY - 4;
    if (!menuOpen && !header.contains(document.activeElement)) {
      if (goingDown && y > 160) header.classList.add("is-hidden");
      else if (goingUp || y <= 160) header.classList.remove("is-hidden");
    }
    if (Math.abs(y - lastY) > 4) lastY = y;
  };
  if (header) {
    header.addEventListener("focusin", function () { header.classList.remove("is-hidden"); });
  }

  // Voltar ao topo
  var backToTop = document.querySelector("[data-back-to-top]");
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion() ? "auto" : "smooth" });
      var skipTarget = document.querySelector("[data-header] a");
      if (skipTarget) skipTarget.focus({ preventScroll: true });
    });
  }

  // ---------------------------------------------------------------
  // 2. Menu mobile: aria-expanded, foco preso dentro, Esc fecha
  // ---------------------------------------------------------------
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.querySelector("[data-mobile-menu]");
  if (toggle && menu) {
    var focusables = function () {
      return [toggle].concat(Array.prototype.slice.call(menu.querySelectorAll("a[href], button:not([disabled])")));
    };
    var setMenu = function (open, restoreFocus) {
      menuOpen = open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", String(!open));
      if ("inert" in menu) menu.inert = !open;
      document.body.classList.toggle("menu-open", open);
      document.body.style.overflow = open ? "hidden" : "";
      if (header) header.classList.remove("is-hidden");
      if (open) {
        var first = menu.querySelector("a[href]");
        if (first) setTimeout(function () { first.focus(); }, 60);
      } else if (restoreFocus) {
        toggle.focus();
      }
    };
    menu.setAttribute("aria-hidden", "true");
    if ("inert" in menu) menu.inert = true;
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true", true);
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false, false); });
    });
    document.addEventListener("keydown", function (e) {
      if (!menuOpen) return;
      if (e.key === "Escape") { setMenu(false, true); return; }
      if (e.key === "Tab") {
        var f = focusables();
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    window.addEventListener("resize", function () {
      if (menuOpen && window.innerWidth >= 1040) setMenu(false, false);
    });
  }

  // ---------------------------------------------------------------
  // 3. Manifesto: palavras acendem conforme o scroll
  // ---------------------------------------------------------------
  var words = [];
  var manifesto = document.querySelector("[data-words]");
  if (manifesto && !reduceMotion()) {
    var splitNode = function (node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var s = document.createElement("span");
            s.className = "w";
            s.textContent = part;
            frag.appendChild(s);
          });
          child.parentNode.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          splitNode(child);
        }
      });
    };
    splitNode(manifesto);
    words = Array.prototype.slice.call(manifesto.querySelectorAll(".w"));
  }
  var updateWords = function () {
    if (!words.length) return;
    var r = manifesto.getBoundingClientRect();
    var h = window.innerHeight;
    var start = h * 0.88, end = h * 0.35;
    var p = (start - r.top) / ((start - end) + r.height * 0.6);
    p = Math.max(0, Math.min(1, p));
    var lit = Math.round(p * words.length);
    for (var i = 0; i < words.length; i++) words[i].classList.toggle("is-lit", i < lit);
  };

  // ---------------------------------------------------------------
  // 4. Parallax leve (só desktop, só transform)
  // ---------------------------------------------------------------
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var parallaxOn = function () {
    return parallaxEls.length && !reduceMotion() && window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
  };
  var updateParallax = function () {
    if (!parallaxOn()) { parallaxEls.forEach(function (el) { el.style.transform = ""; }); return; }
    var h = window.innerHeight;
    parallaxEls.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > h + 100) return;
      var speed = parseFloat(el.getAttribute("data-parallax")) || 0.08;
      var offset = (r.top + r.height / 2 - h / 2) * -speed;
      el.style.transform = "translate3d(0," + offset.toFixed(1) + "px,0)";
    });
  };

  // Loop de scroll único (rAF)
  var ticking = false;
  var onScroll = function () {
    if (ticking) return;
    ticking = true;
    raf(function () {
      onScrollHeader();
      if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 900);
      updateWords();
      updateParallax();
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  // ---------------------------------------------------------------
  // 5. Carrossel com scroll-snap: setas, estado e progresso
  // ---------------------------------------------------------------
  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var track = root.querySelector("[data-carousel-track]");
    var prev = root.querySelector("[data-carousel-prev]");
    var next = root.querySelector("[data-carousel-next]");
    var bar = root.querySelector("[data-carousel-progress]");
    if (!track) return;
    var step = function () {
      var slide = track.querySelector(".slide");
      var gap = parseFloat(getComputedStyle(track).columnGap) || 16;
      return slide ? slide.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    };
    var update = function () {
      var max = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.setAttribute("aria-disabled", String(track.scrollLeft <= 2));
      if (next) next.setAttribute("aria-disabled", String(track.scrollLeft >= max));
      if (bar) {
        var vis = track.clientWidth / track.scrollWidth;
        var pos = max > 0 ? track.scrollLeft / max : 1;
        bar.style.setProperty("--p", Math.max(vis, vis + (1 - vis) * pos) * 100 + "%");
      }
    };
    var go = function (dir) {
      track.scrollBy({ left: dir * step(), behavior: reduceMotion() ? "auto" : "smooth" });
    };
    if (prev) prev.addEventListener("click", function () { go(-1); });
    if (next) next.addEventListener("click", function () { go(1); });
    track.addEventListener("scroll", function () { raf(update); }, { passive: true });
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    });
    window.addEventListener("resize", update, { passive: true });
    update();
  });

  // ---------------------------------------------------------------
  // 6. Depoimentos: um por vez, troca automática com pausa
  // ---------------------------------------------------------------
  document.querySelectorAll("[data-rotator]").forEach(function (root) {
    var items = Array.prototype.slice.call(root.querySelectorAll("[data-rotator-item]"));
    var viewport = root.querySelector("[data-rotator-viewport]");
    var prev = root.querySelector("[data-rotator-prev]");
    var next = root.querySelector("[data-rotator-next]");
    var dotsWrap = root.querySelector("[data-rotator-dots]");
    var count = root.querySelector("[data-rotator-count]");
    if (items.length < 2) { if (items[0]) items[0].classList.add("is-active"); return; }
    var idx = 0, timer = null, hovering = false, focused = false, visible = true, userTookControl = false;
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var dots = items.map(function (item, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Depoimento " + (i + 1) + " de " + items.length);
      b.addEventListener("click", function () { userTookControl = true; show(i); });
      if (dotsWrap) dotsWrap.appendChild(b);
      return b;
    });
    var show = function (i) {
      idx = (i + items.length) % items.length;
      items.forEach(function (item, j) {
        var on = j === idx;
        item.classList.toggle("is-active", on);
        item.setAttribute("aria-hidden", String(!on));
      });
      dots.forEach(function (d, j) { d.setAttribute("aria-current", String(j === idx)); });
      if (count) count.textContent = pad(idx + 1) + " / " + pad(items.length);
      if (viewport) viewport.setAttribute("aria-live", userTookControl ? "polite" : "off");
      schedule();
    };
    var canAuto = function () { return !reduceMotion() && !hovering && !focused && visible && !userTookControl && !document.hidden; };
    var schedule = function () {
      clearTimeout(timer);
      if (canAuto()) timer = setTimeout(function () { show(idx + 1); }, 6500);
    };
    if (prev) prev.addEventListener("click", function () { userTookControl = true; show(idx - 1); });
    if (next) next.addEventListener("click", function () { userTookControl = true; show(idx + 1); });
    root.addEventListener("mouseenter", function () { hovering = true; schedule(); });
    root.addEventListener("mouseleave", function () { hovering = false; schedule(); });
    root.addEventListener("focusin", function () { focused = true; schedule(); });
    root.addEventListener("focusout", function () { focused = root.contains(document.activeElement); schedule(); });
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { userTookControl = true; show(idx + 1); }
      if (e.key === "ArrowLeft") { userTookControl = true; show(idx - 1); }
    });
    document.addEventListener("visibilitychange", schedule);
    if (hasIO) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        schedule();
      }, { threshold: 0.25 }).observe(root);
    }
    show(0);
  });

  // ---------------------------------------------------------------
  // 7. Vídeos em loop: carregam perto da tela, tocam mudos e pausam fora dela.
  //    Com movimento reduzido ou economia de dados: pôster + botão de play.
  // ---------------------------------------------------------------
  var autoplayOK = !reduceMotion() && !saveData;
  var loops = Array.prototype.slice.call(document.querySelectorAll("[data-vloop]"));
  loops.forEach(function (wrap) {
    var video = wrap.querySelector("video");
    var btn = wrap.querySelector("[data-video-toggle]");
    if (!video) return;
    var loaded = false, wantPlay = autoplayOK, inView = false;
    var load = function () {
      if (loaded) return;
      var src = video.getAttribute("data-src");
      if (src) { video.src = src; video.load(); }
      loaded = true;
    };
    var setBtn = function (playing) {
      if (!btn) return;
      btn.hidden = false;
      btn.setAttribute("aria-pressed", String(playing));
      btn.setAttribute("aria-label", playing ? "Pausar vídeo" : "Reproduzir vídeo");
    };
    var play = function () {
      load();
      var p = video.play();
      if (p && p.catch) p.catch(function () { setBtn(false); });
    };
    video.addEventListener("playing", function () { wrap.classList.add("is-playing"); setBtn(true); });
    video.addEventListener("pause", function () { setBtn(false); });
    setBtn(false);
    if (btn) {
      btn.addEventListener("click", function () {
        if (video.paused) { wantPlay = true; play(); }
        else { wantPlay = false; video.pause(); }
      });
    }
    if (hasIO) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && autoplayOK) load();
        });
      }, { rootMargin: "400px 0px" }).observe(wrap);
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        if (inView && wantPlay) play();
        else if (!inView && !video.paused) video.pause();
      }, { threshold: 0.2 }).observe(wrap);
    } else if (autoplayOK) {
      play();
    }
  });

  // Pôster adiado para vídeos com controles (evita baixar pôster fora da dobra)
  var lazyPosters = Array.prototype.slice.call(document.querySelectorAll("video[data-poster]"));
  if (lazyPosters.length) {
    var setPoster = function (v) { v.poster = v.getAttribute("data-poster"); v.removeAttribute("data-poster"); };
    if (hasIO) {
      var posterIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { setPoster(entry.target); posterIO.unobserve(entry.target); }
        });
      }, { rootMargin: "600px 0px" });
      lazyPosters.forEach(function (v) { posterIO.observe(v); });
    } else {
      lazyPosters.forEach(setPoster);
    }
  }

  // ---------------------------------------------------------------
  // 8. Lista de cuidados: imagem acompanha o cursor (desktop)
  // ---------------------------------------------------------------
  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".svc-row").forEach(function (row) {
      row.addEventListener("mousemove", function (e) {
        var r = row.getBoundingClientRect();
        row.style.setProperty("--mx", (e.clientX - r.left) + "px");
      });
    });
  }

  // ---------------------------------------------------------------
  // 9. FAQ: apenas um aberto por grupo
  // ---------------------------------------------------------------
  document.querySelectorAll("[data-faq]").forEach(function (group) {
    var items = group.querySelectorAll("details");
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (item.open) {
          items.forEach(function (other) { if (other !== item) other.open = false; });
        }
      });
    });
  });

  // Ano dinâmico no rodapé
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  // ---------------------------------------------------------------
  // 10. Conversão (GA4): cliques em WhatsApp e telefone, com origem do CTA
  // ---------------------------------------------------------------
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
    if (href.indexOf("wa.me") !== -1) {
      window.gtag("event", "whatsapp_click", {
        cta_section: ctaSection(a),
        cta_text: (a.textContent || "").trim().replace(/\s+/g, " ").slice(0, 60),
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
