/* =========================================================
   Whalexy — interaction layer (vanilla JavaScript)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Compact, offline-safe line icon set. Each requested icon maps to one of
  // these native SVG shapes so the page has no framework or CDN dependency.
  const iconShapes = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
    arrowUp: '<path d="m6 10 6-6 6 6M12 4v16"/>',
    arrowDown: '<path d="M12 4v16m-6-6 6 6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    chevronLeft: '<path d="m15 18-6-6 6-6"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    swap: '<path d="m7 15-4-3 4-3m10 0 4 3-4 3M3 12h18"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    checkDouble: '<path d="m2 12 4 4L16 6M12 15l2 2 8-9"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
    message: '<path d="M20 15a4 4 0 0 1-4 4H8l-5 3 1.6-5A8 8 0 1 1 20 15Z"/>',
    messages: '<path d="M8 18H5l-3 2 1-4a6 6 0 0 1-1-3c0-4 4-7 9-7s9 3 9 7-4 7-9 7a11 11 0 0 1-3-.4"/><path d="M9 3c5 0 9 3 9 7"/>',
    inbox: '<path d="M4 4h16v14H4zM4 13h4l2 3h4l2-3h4"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6M16 5a3 3 0 0 1 0 6M17 14c3 .5 4 2 4 5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-5 3-8 8-8s8 3 8 8"/>',
    send: '<path d="m3 3 18 9-18 9 3-9-3-9Zm3 9h15"/>',
    chart: '<path d="M4 20V10m6 10V4m6 16v-7m5 7H2"/>',
    trend: '<path d="m3 17 6-6 4 4 8-9M15 6h6v6"/>',
    sparkle: '<path d="m12 3 1.4 4.1L18 9l-4.6 1.9L12 15l-1.4-4.1L6 9l4.6-1.9L12 3ZM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Zm14-2 .7 2.3L22 16l-2.3.7L19 19l-.7-2.3L16 16l2.3-.7L19 13Z"/>',
    scan: '<path d="M4 8V4h4m8 0h4v4m0 8v4h-4M8 20H4v-4M8 12h8M12 8v8"/>',
    brain: '<path d="M9 4a3 3 0 0 0-5 2 3 3 0 0 0 0 5 4 4 0 0 0 3 7h2m6-14a3 3 0 0 1 5 2 3 3 0 0 1 0 5 4 4 0 0 1-3 7h-2M9 3v18m6-18v18M9 8H7m8 4h2M9 16H7"/>',
    bot: '<rect x="4" y="6" width="16" height="13" rx="3"/><path d="M12 2v4M8 11h.01M16 11h.01M8 15h8"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    phone: '<path d="M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10 20 4 14 3 5c0-1 1-2 2-2Z"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    dots: '<circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/>',
    alert: '<path d="M12 3 2 21h20L12 3Z"/><path d="M12 9v5m0 3h.01"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-3Z"/><path d="m8 12 3 3 5-6"/>',
    flame: '<path d="M12 22c4 0 7-3 7-7 0-5-3-8-6-12 0 4-2 6-4 8-1-2-1-3-1-5-3 3-4 6-4 9 0 4 4 7 8 7Z"/><path d="M9 18c0-2 1-3 3-5 0 2 2 3 2 5a2.5 2.5 0 0 1-5 0Z"/>',
    file: '<path d="M6 2h8l4 4v16H6zM14 2v5h5M9 12h6m-6 4h6"/>',
    layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    gem: '<path d="m3 9 4-5h10l4 5-9 12L3 9Z"/><path d="m3 9 9 3 9-3M7 4l5 8 5-8"/>',
    shirt: '<path d="m8 4-5 3 3 5 2-1v9h8v-9l2 1 3-5-5-3a4 4 0 0 1-8 0Z"/>',
    school: '<path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 12v5c3 3 9 3 12 0v-5M22 9v6"/>',
    medical: '<path d="M8 3v5a4 4 0 0 0 8 0V3M5 3h3m8 0h3M12 12v3a5 5 0 0 0 10 0v-2M20 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
    building: '<path d="M4 21V4h10v17M14 9h6v12M8 8h2m-2 4h2m-2 4h2m8-3h1m-1 4h1M2 21h20"/>',
    plane: '<path d="m22 2-8 20-3-9-9-3 20-8Z"/><path d="M22 2 11 13"/>',
    rupee: '<path d="M7 5h10M7 9h10M8 5c6 0 6 8 0 8h-1l9 7"/>',
    crown: '<path d="m3 7 4 4 5-7 5 7 4-4-2 12H5L3 7Z"/><path d="M5 19h14"/>',
    paperclip: '<path d="m8 12 6-6a4 4 0 0 1 6 6l-8 8a6 6 0 0 1-9-9l8-8"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1 3 4 3 4-3 4-3M9 9h.01M15 9h.01"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    wifi: '<path d="M5 12a10 10 0 0 1 14 0M8 15a6 6 0 0 1 8 0m-5 3a2 2 0 0 1 2 0"/>',
    signal: '<path d="M4 20v-3m5 3v-7m5 7v-11m5 11V5"/>',
    battery: '<rect x="3" y="7" width="17" height="10" rx="2"/><path d="M22 10v4M6 10h8v4H6z"/>',
    generic: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/>'
  };

  const iconGroups = {
    arrow: ["arrow-right"], arrowUpRight: ["arrow-up-right"], arrowUp: ["arrow-up"], arrowDown: ["arrow-down"],
    chevronRight: ["chevron-right"], chevronLeft: ["chevron-left"], chevronDown: ["chevron-down"], swap: ["chevrons-up-down"],
    check: ["check", "circle-check-big"], checkDouble: ["check-check"], plus: ["plus"], minus: ["minus"], x: ["x"],
    search: ["search"], message: ["message-square", "message-circle", "message-square-reply", "message-circle-warning"],
    messages: ["messages-square", "bot-message-square"], inbox: ["inbox"], users: ["users", "users-round", "contact-round"],
    user: ["user-round-check", "user-round-plus"], send: ["send", "send-horizontal"], chart: ["chart-no-axes-combined"], trend: ["trending-up"],
    sparkle: ["sparkles", "wand-sparkles", "party-popper", "zap", "sprout", "rocket"], scan: ["scan-search", "scan-text", "list-filter", "crosshair"],
    brain: ["brain-circuit"], bot: ["bot"], clock: ["clock-3", "timer-reset"], phone: ["phone"], bell: ["bell"], dots: ["ellipsis"],
    alert: ["triangle-alert", "siren", "shield-alert", "unplug"], shield: ["shield-check"], flame: ["flame"],
    file: ["sheet", "align-left"], layout: ["layout-template", "panel-right-close", "refresh-cw"], gem: ["gem"], shirt: ["shirt"],
    school: ["graduation-cap"], medical: ["stethoscope", "heart-pulse"], building: ["building-2"], plane: ["plane"], rupee: ["badge-indian-rupee"],
    crown: ["crown"], paperclip: ["paperclip"], smile: ["smile"], copy: ["copy"], mail: ["mail"], wifi: ["wifi"], signal: ["signal"], battery: ["battery-medium"],
    generic: ["gauge", "mouse-pointer-click", "moon-star"]
  };

  const iconLookup = Object.entries(iconGroups).reduce((lookup, [shape, names]) => {
    names.forEach((name) => { lookup[name] = shape; });
    return lookup;
  }, {});

  const refreshIcons = () => {
    document.querySelectorAll("i[data-lucide]").forEach((icon) => {
      const name = icon.dataset.lucide;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "1.8");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("data-icon", name);
      if (icon.className) svg.setAttribute("class", icon.className);
      svg.innerHTML = iconShapes[iconLookup[name] || "generic"];
      icon.replaceWith(svg);
    });
  };

  refreshIcons();

  // Type the hero's suggested reply once it enters the viewport.
  const typedReply = document.querySelector(".typed-reply");
  if (typedReply) {
    const replyTextNode = [...typedReply.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
    const replyText = replyTextNode?.nodeValue.trim() || "";
    const runTyping = () => {
      if (!replyTextNode || typedReply.dataset.typed === "true") return;
      typedReply.dataset.typed = "true";
      if (reduceMotion) return;
      replyTextNode.nodeValue = "";
      let index = 0;
      const timer = window.setInterval(() => {
        replyTextNode.nodeValue += replyText[index] || "";
        index += 1;
        if (index >= replyText.length) window.clearInterval(timer);
      }, 22);
    };
    if ("IntersectionObserver" in window) {
      const typingObserver = new IntersectionObserver((entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          runTyping();
          observer.disconnect();
        }
      }, { threshold: 0.5 });
      typingObserver.observe(typedReply);
    } else runTyping();
  }

  // Sticky header and mobile navigation
  const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 18);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeNav = () => {
    navMenu?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Open navigation menu");
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu?.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  document.addEventListener("click", (event) => {
    if (!navMenu?.classList.contains("open")) return;
    if (!navMenu.contains(event.target) && !navToggle?.contains(event.target)) closeNav();
  });

  // Smooth internal navigation
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId && targetId !== "#" ? document.querySelector(targetId) : null;
      if (!target) return;

      event.preventDefault();
      closeNav();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", targetId);
    });
  });

  // Scroll reveal
  const revealElements = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px" });

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  // Animated proof counters
  const counters = document.querySelectorAll(".counter");
  const runCounter = (counter) => {
    const target = Number(counter.dataset.target || 0);
    const suffix = counter.dataset.suffix || "";
    const duration = reduceMotion ? 1 : 1300;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.65 });
    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(runCounter);
  }

  // Active navigation based on the visible section
  const navigationLinks = [...document.querySelectorAll(".nav-links a")];
  const watchedSections = navigationLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && watchedSections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navigationLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-28% 0px -58%", threshold: [0.05, 0.25, 0.5] });

    watchedSections.forEach((section) => sectionObserver.observe(section));
  }

  // FAQ accordion
  document.querySelectorAll(".faq-item > button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const wasOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item").forEach((faqItem) => {
        faqItem.classList.remove("open");
        faqItem.querySelector("button")?.setAttribute("aria-expanded", "false");
      });

      if (!wasOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Product solution hover/focus state
  document.querySelectorAll(".solution-item").forEach((item) => {
    const activate = () => {
      document.querySelectorAll(".solution-item").forEach((candidate) => candidate.classList.remove("active"));
      item.classList.add("active");
    };
    item.addEventListener("mouseenter", activate);
    item.addEventListener("focusin", activate);
  });

  // Industry use-case switcher
  const industryData = {
    jewellery: {
      name: "Jewellery",
      icon: "gem",
      message: "bridal set ka catalogue bhejo, next month wedding hai",
      action: "Tag as Wedding Lead + High Intent",
      outcome: "Send bridal campaign and prioritise follow-up",
      reply: "Bilkul Priya ji! Main aapko latest bridal collection bhej rahi hoon. Aapka preferred style kya hai?"
    },
    clothing: {
      name: "Clothing",
      icon: "shirt",
      message: "blue kurta XL mein milega? aaj pickup karna hai",
      action: "Detect Product Availability + Pickup",
      outcome: "Check stock and move the buyer to store visit",
      reply: "Haan ji, blue kurta XL available hai. Main aapke naam se aaj ke liye hold kar deti hoon."
    },
    coaching: {
      name: "Coaching",
      icon: "graduation-cap",
      message: "NEET weekend batch ki fees aur demo class kab hai?",
      action: "Classify as Admission + Fee Enquiry",
      outcome: "Share approved details and alert counsellor",
      reply: "Weekend NEET batch available hai. Main fees aur next demo slot share kar raha hoon."
    },
    clinics: {
      name: "Clinics",
      icon: "stethoscope",
      message: "doctor kal 6 baje available hain? report dikhani hai",
      action: "Detect Appointment + Existing Patient",
      outcome: "Offer available slot with safe human review",
      reply: "Ji, kal 6:15 ka slot available hai. Kya main aapke liye confirm kar doon?"
    },
    realestate: {
      name: "Real Estate",
      icon: "building-2",
      message: "2BHK chahiye under 60 lakh, site visit Sunday possible?",
      action: "Capture Budget + Property + Visit Intent",
      outcome: "Score hot and assign the right sales agent",
      reply: "Sunday site visit possible hai. Aapko ready-to-move chahiye ya under-construction bhi chalega?"
    },
    travel: {
      name: "Travel",
      icon: "plane",
      message: "4 logon ka Goa package batao, 12 July se 4 nights",
      action: "Extract Destination + Dates + Group Size",
      outcome: "Build a qualified itinerary request instantly",
      reply: "Sure! 4 people, 12 July se 4 nights noted. Aap flight-inclusive package prefer karenge?"
    }
  };

  const updateIndustry = (key) => {
    const data = industryData[key];
    if (!data) return;

    const name = document.getElementById("industryName");
    const message = document.getElementById("industryMessage");
    const phoneMessage = document.getElementById("phoneMessage");
    const action = document.getElementById("industryAction");
    const outcome = document.getElementById("industryOutcome");
    const icon = document.getElementById("industryIcon");
    const phoneReply = document.querySelector(".industry-phone .chat-bubble.outgoing");

    if (name) name.textContent = data.name;
    if (message) message.textContent = `“${data.message}”`;
    if (phoneMessage) phoneMessage.childNodes[0].nodeValue = data.message;
    if (action) action.textContent = data.action;
    if (outcome) outcome.textContent = data.outcome;
    if (phoneReply) phoneReply.childNodes[0].nodeValue = data.reply;
    if (icon) icon.innerHTML = `<i data-lucide="${data.icon}"></i>`;
    refreshIcons();
  };

  document.querySelectorAll(".industry-tabs button").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".industry-tabs button").forEach((candidate) => {
        candidate.classList.remove("active");
        candidate.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      updateIndustry(tab.dataset.industry);
    });
  });

  // Accessible dialogs
  let demoTimer = null;

  const stopDemoCycle = () => {
    if (demoTimer) window.clearInterval(demoTimer);
    demoTimer = null;
  };

  const startDemoCycle = () => {
    stopDemoCycle();
    const steps = [...document.querySelectorAll(".demo-steps li")];
    if (steps.length < 2 || reduceMotion) return;
    let activeStep = 0;
    demoTimer = window.setInterval(() => {
      steps.forEach((step) => step.classList.remove("active"));
      activeStep = (activeStep + 1) % steps.length;
      steps[activeStep].classList.add("active");
    }, 1900);
  };

  const openModal = (dialog) => {
    if (!dialog) return;
    closeNav();
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    document.body.classList.add("modal-open");
    if (dialog.id === "demo-modal") startDemoCycle();
  };

  const closeModal = (dialog) => {
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    document.body.classList.remove("modal-open");
    if (dialog.id === "demo-modal") stopDemoCycle();
  };

  document.querySelectorAll("[data-modal-open]").forEach((button) => {
    button.addEventListener("click", () => openModal(document.getElementById(button.dataset.modalOpen)));
  });

  document.querySelectorAll(".site-modal").forEach((dialog) => {
    dialog.querySelectorAll("[data-modal-close]").forEach((button) => {
      button.addEventListener("click", () => closeModal(dialog));
    });

    dialog.addEventListener("click", (event) => {
      const bounds = dialog.getBoundingClientRect();
      const clickedBackdrop = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (clickedBackdrop) closeModal(dialog);
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("modal-open");
      if (dialog.id === "demo-modal") stopDemoCycle();
    });
  });

  // Small campaign editor feedback inside the visual mockup
  const editorButton = document.querySelector(".editor-button");
  editorButton?.addEventListener("click", () => {
    const original = editorButton.innerHTML;
    editorButton.innerHTML = '<i data-lucide="check"></i> Ready to schedule';
    editorButton.classList.add("editor-confirmed");
    refreshIcons();
    window.setTimeout(() => {
      editorButton.innerHTML = original;
      editorButton.classList.remove("editor-confirmed");
      refreshIcons();
    }, 2200);
  });

  // Current copyright year
  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeNav();
  });
});
