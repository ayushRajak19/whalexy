/* =========================================================
   Whalexy Command Center — vanilla JavaScript interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // A dashboard is a fixed app shell; never inherit a landing-page scroll offset.
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  // Offline-safe SVG icon renderer.
  const shapes = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    arrowUp: '<path d="m6 10 6-6 6 6m-6-6v16"/>',
    arrowDown: '<path d="M12 4v16m-6-6 6 6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>', chevronLeft: '<path d="m15 18-6-6 6-6"/>', chevronDown: '<path d="m6 9 6 6 6-6"/>',
    chevrons: '<path d="m7 9 5-5 5 5M7 15l5 5 5-5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>', panel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16m4-10 3 2-3 2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', minus: '<path d="M5 12h14"/>', x: '<path d="M6 6l12 12M18 6 6 18"/>',
    check: '<path d="m5 12 4 4L19 6"/>', checkDouble: '<path d="m2 12 4 4L16 6m-4 9 2 2 8-9"/>',
    message: '<path d="M20 15a4 4 0 0 1-4 4H8l-5 3 1.6-5A8 8 0 1 1 20 15Z"/>',
    messages: '<path d="M8 18H5l-3 2 1-4a6 6 0 0 1-1-3c0-4 4-7 9-7s9 3 9 7-4 7-9 7a11 11 0 0 1-3-.4"/><path d="M9 3c5 0 9 3 9 7"/>',
    inbox: '<path d="M4 4h16v14H4zM4 13h4l2 3h4l2-3h4"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6m7-15a3 3 0 0 1 0 6m1 3c3 .5 4 2 4 5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-5 3-8 8-8s8 3 8 8"/>',
    send: '<path d="m3 3 18 9-18 9 3-9-3-9Zm3 9h15"/>',
    sparkle: '<path d="m12 3 1.4 4.1L18 9l-4.6 1.9L12 15l-1.4-4.1L6 9l4.6-1.9L12 3ZM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Zm14-2 .7 2.3L22 16l-2.3.7L19 19l-.7-2.3L16 16l2.3-.7L19 13Z"/>',
    chart: '<path d="M4 20V10m6 10V4m6 16v-7m5 7H2"/>', trend: '<path d="m3 17 6-6 4 4 8-9m-6 0h6v6"/>', trendDown: '<path d="m3 7 6 6 4-4 8 9m-6 0h6v-6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
    alert: '<path d="M12 3 2 21h20L12 3Z"/><path d="M12 9v5m0 3h.01"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-3Z"/><path d="m8 12 3 3 5-6"/>',
    flame: '<path d="M12 22c4 0 7-3 7-7 0-5-3-8-6-12 0 4-2 6-4 8-1-2-1-3-1-5-3 3-4 6-4 9 0 4 4 7 8 7Z"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    bot: '<rect x="4" y="6" width="16" height="13" rx="3"/><path d="M12 2v4M8 11h.01M16 11h.01M8 15h8"/>',
    scan: '<path d="M4 8V4h4m8 0h4v4m0 8v4h-4M8 20H4v-4M8 12h8m-4-4v8"/>',
    heart: '<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    template: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    file: '<path d="M6 2h8l4 4v16H6zM14 2v5h5M9 12h6m-6 4h6"/>',
    bag: '<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    store: '<path d="M4 10v11h16V10M3 4h18l-2 6a3 3 0 0 1-4 0 3 3 0 0 1-6 0 3 3 0 0 1-4 0L3 4ZM9 21v-6h6v6"/>',
    plug: '<path d="m12 17-5 5m7-20v5m5-3-4 4M5 13l6 6 6-6-6-6-6 6Z"/>',
    code: '<path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12"/>',
    rupee: '<path d="M7 5h10M7 9h10M8 5c6 0 6 8 0 8H7l9 7"/>',
    key: '<circle cx="8" cy="15" r="5"/><path d="m12 12 9-9m-4 4 3 3m-6 0 3 3"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2 2 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z"/>',
    dots: '<circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/>',
    phone: '<path d="M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10 20 4 14 3 5c0-1 1-2 2-2Z"/>',
    paperclip: '<path d="m8 12 6-6a4 4 0 0 1 6 6l-8 8a6 6 0 0 1-9-9l8-8"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1 3 4 3 4-3 4-3M9 9h.01M15 9h.01"/>',
    moon: '<path d="M20 15a8 8 0 0 1-11-11 9 9 0 1 0 11 11Z"/>', sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
    generic: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/>'
  };

  const groups = {
    grid: ["grid"], arrow: ["arrow", "logout"], arrowUp: ["arrow-up", "upload"], arrowDown: ["arrow-down", "download"],
    chevronRight: ["chevron-right"], chevronLeft: ["chevron-left"], chevronDown: ["chevron-down"], chevrons: ["chevrons"],
    menu: ["menu"], panel: ["panel", "panel-right"], search: ["search"], plus: ["plus"], minus: ["minus"], x: ["x"],
    check: ["check"], checkDouble: ["check-double"], message: ["message", "note"], messages: ["messages"], inbox: ["inbox"], users: ["users", "agent", "user-plus"], user: ["user"],
    send: ["send"], sparkle: ["sparkle", "rocket", "star", "zap"], chart: ["chart", "gauge", "activity"], trend: ["trend"], trendDown: ["trend-down"],
    clock: ["clock"], calendar: ["calendar"], alert: ["alert", "siren"], shield: ["shield", "shield-check"], flame: ["flame"], bell: ["bell"], bot: ["bot", "brain"],
    scan: ["scan", "filter", "target", "sliders"], heart: ["heart"], template: ["template", "flow", "split", "maximize"], file: ["file", "book"],
    bag: ["bag", "credit-card"], store: ["store", "shopify", "woo"], plug: ["plug", "webhook", "link"], code: ["code"], rupee: ["rupee"], key: ["key"],
    copy: ["copy"], eye: ["eye"], edit: ["edit"], dots: ["dots", "drag"], phone: ["phone"], paperclip: ["paperclip"], smile: ["smile"], moon: ["moon"], sun: ["sun"], settings: ["settings", "refresh", "undo", "redo"],
    generic: ["facebook", "instagram", "tag", "database", "info", "signal", "wifi", "battery", "mic", "play"]
  };
  const iconMap = {};
  Object.entries(groups).forEach(([shape, names]) => names.forEach((name) => { iconMap[name] = shape; }));

  const renderIcons = (root = document) => {
    root.querySelectorAll("i[data-i]").forEach((icon) => {
      const name = icon.dataset.i;
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
      svg.innerHTML = shapes[iconMap[name] || "generic"];
      icon.replaceWith(svg);
    });
  };
  renderIcons();

  // Toasts
  const toastRegion = document.getElementById("toastRegion");
  const showToast = (message, detail = "Your workspace is updated") => {
    if (!toastRegion) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span><i data-i="check"></i></span><div><strong></strong><small></small></div><i></i>`;
    toast.querySelector("strong").textContent = message;
    toast.querySelector("small").textContent = detail;
    toastRegion.appendChild(toast);
    renderIcons(toast);
    window.setTimeout(() => {
      toast.classList.add("leaving");
      window.setTimeout(() => toast.remove(), 220);
    }, 3000);
  };

  document.querySelectorAll("[data-toast]").forEach((button) => {
    button.addEventListener("click", () => showToast(button.dataset.toast));
  });

  // View navigation
  const views = [...document.querySelectorAll(".app-view")];
  const navItems = [...document.querySelectorAll(".nav-item[data-view]")];
  const pageTitle = document.getElementById("pageTitle");
  const pageKicker = document.getElementById("pageKicker");
  const sidebar = document.getElementById("appSidebar");
  const sidebarScrim = document.getElementById("sidebarScrim");

  const closeMobileSidebar = () => {
    sidebar?.classList.remove("mobile-open");
    sidebarScrim?.classList.remove("visible");
  };

  const closeDropdowns = (except = null) => {
    document.querySelectorAll(".dropdown.open").forEach((dropdown) => {
      if (dropdown !== except) dropdown.classList.remove("open");
    });
  };

  const switchView = (name, updateHash = true) => {
    const target = document.getElementById(`view-${name}`);
    if (!target) return;
    views.forEach((view) => view.classList.toggle("active", view === target));
    navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === name));
    body.dataset.activeView = name;
    body.classList.remove("chat-open");
    if (pageTitle) pageTitle.textContent = target.dataset.title || "Whalexy";
    if (pageKicker) pageKicker.textContent = target.dataset.kicker || "WORKSPACE";
    document.getElementById("workspaceContent")?.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    closeMobileSidebar();
    closeDropdowns();
    if (updateHash) history.replaceState(null, "", `#${name}`);
  };

  navItems.forEach((item) => item.addEventListener("click", () => switchView(item.dataset.view)));
  document.querySelectorAll("[data-view-link]").forEach((item) => {
    item.addEventListener("click", () => switchView(item.dataset.viewLink));
  });

  const initialView = location.hash.slice(1);
  if (initialView && document.getElementById(`view-${initialView}`)) switchView(initialView, false);

  // Sidebar behavior
  document.getElementById("sidebarCollapse")?.addEventListener("click", () => {
    body.classList.toggle("sidebar-collapsed");
    try { localStorage.setItem("whalexy-sidebar", body.classList.contains("sidebar-collapsed") ? "collapsed" : "open"); } catch (_) { /* storage can be unavailable on file URLs */ }
  });
  try { if (localStorage.getItem("whalexy-sidebar") === "collapsed" && window.innerWidth > 960) body.classList.add("sidebar-collapsed"); } catch (_) { /* ignore */ }
  document.getElementById("mobileMenu")?.addEventListener("click", () => {
    sidebar?.classList.add("mobile-open");
    sidebarScrim?.classList.add("visible");
  });
  sidebarScrim?.addEventListener("click", closeMobileSidebar);

  // Dropdown menus
  document.querySelectorAll("[data-dropdown-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const menu = document.getElementById(toggle.dataset.dropdownToggle);
      const willOpen = !menu?.classList.contains("open");
      closeDropdowns(menu);
      menu?.classList.toggle("open", willOpen);
    });
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".topbar-dropdown-wrap") && !event.target.closest(".business-mini")) closeDropdowns();
  });
  document.getElementById("markAllRead")?.addEventListener("click", () => {
    document.querySelectorAll(".notification-item.unread").forEach((item) => item.classList.remove("unread"));
    const badge = document.querySelector(".notification-button > b");
    if (badge) badge.remove();
    showToast("Notifications marked as read");
  });

  // Theme
  const themeToggle = document.getElementById("themeToggle");
  const applyTheme = (theme) => {
    body.dataset.theme = theme;
    if (themeToggle) {
      themeToggle.innerHTML = `<i data-i="${theme === "dark" ? "sun" : "moon"}"></i>`;
      themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
      renderIcons(themeToggle);
    }
  };
  try { applyTheme(localStorage.getItem("whalexy-theme") || "light"); } catch (_) { applyTheme("light"); }
  themeToggle?.addEventListener("click", () => {
    const theme = body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try { localStorage.setItem("whalexy-theme", theme); } catch (_) { /* ignore */ }
  });

  // AI assistant dock
  const assistantDock = document.getElementById("assistantDock");
  const aiScrim = document.getElementById("mobileAiScrim");
  document.getElementById("aiDockToggle")?.addEventListener("click", () => {
    if (window.innerWidth <= 1180) body.classList.toggle("ai-dock-open");
    else body.classList.toggle("ai-dock-hidden");
  });
  document.getElementById("closeAssistantDock")?.addEventListener("click", () => {
    body.classList.remove("ai-dock-open");
    body.classList.add("ai-dock-hidden");
  });
  aiScrim?.addEventListener("click", () => body.classList.remove("ai-dock-open"));

  const assistantResponse = document.getElementById("assistantResponse");
  const assistantAnswers = {
    "Which campaign performed best?": "Wedding Preview Weekend is your strongest campaign: 38.9% reply rate and 28 attributed orders.",
    "Who needs follow-up today?": "14 customers need follow-up today. Five are hot leads, led by Priya Sharma and Neha Jain.",
    "Summarise open complaints": "Six complaints are open. Two need attention now: Rahul’s payment claim and Amit’s delayed order."
  };
  const answerAssistant = (question) => {
    if (!assistantResponse || !question.trim()) return;
    const answer = assistantAnswers[question] || "I found 7 high-intent chats, 2 urgent complaints and 14 follow-ups that deserve attention today.";
    assistantResponse.querySelector("p").innerHTML = "";
    assistantResponse.querySelector("p").textContent = answer;
    showToast("Whalexy AI answered", "The latest workspace data was used");
  };
  document.querySelectorAll("[data-ai-question]").forEach((button) => button.addEventListener("click", () => answerAssistant(button.dataset.aiQuestion)));
  document.getElementById("askAssistant")?.addEventListener("click", () => {
    const input = assistantDock?.querySelector("textarea");
    answerAssistant(input?.value || "");
    if (input) input.value = "";
  });

  // Global and scoped search
  const filterElements = (container, query) => {
    const normalized = query.trim().toLowerCase();
    container?.querySelectorAll("[data-search]").forEach((item) => {
      item.classList.toggle("search-hidden", Boolean(normalized) && !item.dataset.search.toLowerCase().includes(normalized));
    });
  };
  const globalSearch = document.getElementById("globalSearch");
  globalSearch?.addEventListener("input", () => {
    const activeView = document.querySelector(".app-view.active");
    filterElements(activeView, globalSearch.value);
  });
  document.getElementById("mobileSearchToggle")?.addEventListener("click", () => {
    globalSearch?.closest(".global-search")?.classList.toggle("mobile-visible");
    if (globalSearch?.closest(".global-search")?.classList.contains("mobile-visible")) globalSearch.focus();
  });
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      globalSearch?.focus();
    }
  });
  document.querySelectorAll("[data-filter-target]").forEach((input) => {
    input.addEventListener("input", () => filterElements(document.getElementById(input.dataset.filterTarget), input.value));
  });

  // Smart Inbox filters and mobile panes
  const conversationList = document.getElementById("conversationList");
  const conversationSearch = document.getElementById("conversationSearch");
  let activeChatFilter = "priority";
  const applyConversationFilter = () => {
    const query = (conversationSearch?.value || "").toLowerCase();
    conversationList?.querySelectorAll(".conversation-item").forEach((item) => {
      const status = item.dataset.status || "";
      const matchesFilter = activeChatFilter === "all" || status.includes(activeChatFilter);
      const matchesSearch = !query || item.dataset.search.toLowerCase().includes(query);
      item.hidden = !(matchesFilter && matchesSearch);
    });
  };
  document.querySelectorAll("[data-chat-filter]").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("[data-chat-filter]").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      activeChatFilter = tab.dataset.chatFilter;
      applyConversationFilter();
    });
  });
  conversationSearch?.addEventListener("input", applyConversationFilter);
  conversationList?.querySelectorAll(".conversation-item").forEach((item) => {
    item.addEventListener("click", () => {
      conversationList.querySelectorAll(".conversation-item").forEach((chat) => chat.classList.remove("active"));
      item.classList.add("active");
      body.classList.add("chat-open");
      const name = item.dataset.customer;
      const headerName = document.querySelector(".chat-person-copy strong");
      if (headerName && name !== "Priya Sharma") {
        headerName.textContent = name;
        showToast(`${name} opened`, "Sample context loaded in the conversation pane");
      } else if (headerName) headerName.textContent = "Priya Sharma";
    });
  });
  document.querySelector(".mobile-pane-back")?.addEventListener("click", () => body.classList.remove("chat-open"));

  const inboxShell = document.querySelector(".smart-inbox-shell");
  document.getElementById("inboxAiToggle")?.addEventListener("click", () => inboxShell?.classList.add("inbox-ai-open"));
  document.getElementById("collapseInboxAi")?.addEventListener("click", () => {
    if (window.innerWidth <= 1180) inboxShell?.classList.remove("inbox-ai-open");
    else inboxShell?.classList.toggle("ai-collapsed");
  });
  document.querySelector(".lead-score-card")?.addEventListener("click", () => {
    if (window.innerWidth <= 1180) inboxShell?.classList.add("inbox-ai-open");
  });

  // Chat reply interactions
  const chatInput = document.getElementById("chatInput");
  const chatThread = document.getElementById("activeChatThread");
  const recommendedReply = "Ji Priya ji, bridal necklace collection available hai. Aap kal kis time visit karenge?";
  const typeReply = (text) => {
    if (!chatInput) return;
    if (reduceMotion) {
      chatInput.value = text;
      chatInput.focus();
      return;
    }
    chatInput.value = "";
    let index = 0;
    const timer = window.setInterval(() => {
      chatInput.value += text[index] || "";
      index += 1;
      if (index >= text.length) {
        window.clearInterval(timer);
        chatInput.focus();
      }
    }, 10);
  };
  document.querySelectorAll(".use-reply").forEach((button) => button.addEventListener("click", () => {
    const reply = button.closest(".suggested-reply")?.querySelector("p")?.textContent || recommendedReply;
    typeReply(reply);
    showToast("Suggested reply added", "Review it before sending");
  }));
  document.querySelectorAll(".edit-reply").forEach((button) => button.addEventListener("click", () => {
    const reply = button.closest(".suggested-reply")?.querySelector("p")?.textContent || recommendedReply;
    if (chatInput) chatInput.value = reply;
    chatInput?.focus();
  }));
  document.getElementById("aiGenerate")?.addEventListener("click", () => typeReply(recommendedReply));

  const sendChatMessage = (preset = "") => {
    const text = preset || chatInput?.value.trim();
    if (!text || !chatThread) {
      showToast("Type a message first", "The composer is waiting for your reply");
      return;
    }
    const message = document.createElement("div");
    message.className = "chat-message agent";
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    const author = document.createElement("span");
    author.className = "message-author";
    author.textContent = "Aman · Owner";
    const time = document.createElement("time");
    time.innerHTML = `${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} <i data-i="check-double"></i>`;
    message.append(paragraph, author, time);
    chatThread.appendChild(message);
    renderIcons(message);
    if (chatInput) chatInput.value = "";
    chatThread.scrollTo({ top: chatThread.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" });
    showToast("Message sent", "Priya’s conversation is up to date");
  };
  document.getElementById("sendMessage")?.addEventListener("click", () => sendChatMessage());
  chatInput?.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") sendChatMessage();
  });
  document.querySelectorAll(".quick-send").forEach((button) => button.addEventListener("click", () => {
    const reply = button.closest(".suggested-reply")?.querySelector("p")?.textContent || recommendedReply;
    sendChatMessage(reply);
  }));
  document.getElementById("dismissAiEvent")?.addEventListener("click", (event) => event.currentTarget.closest(".inline-ai-event")?.remove());
  document.getElementById("markHotLead")?.addEventListener("click", () => showToast("Priya marked as hot", "Added to your Hot Leads segment"));
  document.getElementById("addFollowup")?.addEventListener("click", () => showToast("Follow-up added", "Tomorrow at 11:00 AM"));
  document.getElementById("refreshReplies")?.addEventListener("click", () => showToast("Fresh replies generated", "Tone matched to your workspace settings"));
  document.getElementById("escalateHuman")?.addEventListener("click", () => {
    if (!chatThread || chatThread.querySelector(".escalation-banner")) return;
    const alert = document.createElement("div");
    alert.className = "inline-ai-event escalation-banner";
    alert.innerHTML = '<span><i data-i="alert"></i></span><div><strong>Escalated to Aman Shah</strong><p>Owner notified with summary and recommended next action.</p></div><button type="button" aria-label="Dismiss escalation alert"><i data-i="x"></i></button>';
    chatThread.appendChild(alert);
    renderIcons(alert);
    alert.querySelector("button").addEventListener("click", () => alert.remove());
    showToast("Human escalation created", "Aman has been notified");
  });

  // Contacts filtering and bulk selection
  const contactRows = [...document.querySelectorAll("#contactTableBody tr")];
  const contactSearch = document.getElementById("contactSearch");
  let activeSegment = "all";
  const applyContactFilters = () => {
    const query = (contactSearch?.value || "").trim().toLowerCase();
    contactRows.forEach((row) => {
      const segmentMatch = activeSegment === "all" || (row.dataset.segment || "").includes(activeSegment);
      const searchMatch = !query || (row.dataset.search || "").toLowerCase().includes(query);
      row.hidden = !(segmentMatch && searchMatch);
    });
  };
  document.querySelectorAll("[data-segment]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-segment]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeSegment = button.dataset.segment;
    applyContactFilters();
  }));
  contactSearch?.addEventListener("input", applyContactFilters);

  const bulkBar = document.getElementById("bulkBar");
  const selectedCount = document.getElementById("selectedCount");
  const contactChecks = [...document.querySelectorAll(".contact-check")];
  const updateBulkBar = () => {
    const count = contactChecks.filter((box) => box.checked).length;
    if (selectedCount) selectedCount.textContent = String(count);
    bulkBar?.classList.toggle("visible", count > 0);
    const selectAll = document.getElementById("selectAllContacts");
    if (selectAll) selectAll.checked = count === contactChecks.length;
  };
  contactChecks.forEach((box) => box.addEventListener("change", updateBulkBar));
  document.getElementById("selectAllContacts")?.addEventListener("change", (event) => {
    contactChecks.forEach((box) => { box.checked = event.target.checked; });
    updateBulkBar();
  });
  document.getElementById("clearSelection")?.addEventListener("click", () => {
    contactChecks.forEach((box) => { box.checked = false; });
    updateBulkBar();
  });
  document.getElementById("importContacts")?.addEventListener("click", () => showToast("Excel import ready", "Choose an .xlsx or .csv file in production"));
  document.getElementById("exportContacts")?.addEventListener("click", () => showToast("Contact export prepared", "12,840 customer records selected"));
  document.getElementById("createSegment")?.addEventListener("click", () => showToast("Segment builder opened", "Combine tags, behaviour and AI signals"));

  // Template filters and modal preview
  let templateFilter = "all";
  const templateSearch = document.getElementById("templateSearch");
  const applyTemplateFilters = () => {
    const query = (templateSearch?.value || "").toLowerCase();
    document.querySelectorAll(".template-card").forEach((card) => {
      const statusMatch = templateFilter === "all" || card.dataset.status === templateFilter;
      const queryMatch = !query || card.dataset.search.toLowerCase().includes(query);
      card.hidden = !(statusMatch && queryMatch);
    });
  };
  document.querySelectorAll("[data-template-filter]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-template-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    templateFilter = button.dataset.templateFilter;
    applyTemplateFilters();
  }));
  templateSearch?.addEventListener("input", applyTemplateFilters);

  const modalData = {
    bridal: { title: "bridal_preview_invite", message: "Hi Priya, our new bridal collection is here ✨ Book your private preview this weekend.", button: "BOOK A VISIT" },
    order: { title: "order_ready", message: "Hi Priya, your order WAX-1046 is ready for pickup from our Jaipur store.", button: "VIEW ORDER" },
    festival: { title: "festival_early_access", message: "Namaste Priya, festive collection ka early access ab live hai. Aapke liye private preview ready hai.", button: "VIEW COLLECTION" },
    discount: { title: "flash_discount", message: "Flash sale! Get an exclusive discount on selected jewellery for the next 2 hours.", button: "SHOP NOW" }
  };

  // Dialog helpers
  const openModal = (dialog) => {
    if (!dialog) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  };
  const closeModal = (dialog) => {
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  };
  document.querySelectorAll("[data-open-modal]").forEach((button) => button.addEventListener("click", () => openModal(document.getElementById(button.dataset.openModal))));
  document.querySelectorAll(".app-modal").forEach((dialog) => {
    dialog.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", () => closeModal(dialog)));
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeModal(dialog);
    });
  });

  const templateModal = document.getElementById("templateModal");
  document.querySelectorAll(".preview-template").forEach((button) => button.addEventListener("click", () => {
    const data = modalData[button.dataset.template] || modalData.bridal;
    document.getElementById("templateModalTitle").textContent = data.title;
    document.getElementById("templateModalMessage").textContent = data.message;
    document.getElementById("templateModalButton").textContent = data.button;
    openModal(templateModal);
  }));
  document.getElementById("createTemplate")?.addEventListener("click", () => {
    openModal(templateModal);
    showToast("Template builder preview", "Duplicate and edit an approved template");
  });

  // Campaign builder
  document.getElementById("sendTestCampaign")?.addEventListener("click", () => showToast("Test message sent", "Delivered to +91 98765 43210"));
  document.getElementById("reviewCampaign")?.addEventListener("click", () => {
    const name = document.getElementById("campaignName")?.value || "Campaign";
    closeModal(document.getElementById("campaignModal"));
    showToast(`${name} is ready`, "Audience and template checks passed");
  });
  document.querySelectorAll(".schedule-options label").forEach((label) => label.addEventListener("click", () => {
    document.querySelectorAll(".schedule-options label").forEach((item) => item.classList.remove("selected"));
    label.classList.add("selected");
  }));

  // Clipboard interactions
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const temporary = document.createElement("textarea");
      temporary.value = text;
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();
      document.execCommand("copy");
      temporary.remove();
    }
    showToast("Copied to clipboard");
  };
  document.querySelectorAll("[data-copy]").forEach((button) => button.addEventListener("click", () => copyText(button.dataset.copy)));
  const apiKeyValue = document.getElementById("apiKeyValue");
  let apiKeyVisible = false;
  document.getElementById("revealApiKey")?.addEventListener("click", () => {
    apiKeyVisible = !apiKeyVisible;
    if (apiKeyValue) apiKeyValue.textContent = apiKeyVisible ? "wax_live_8Z4kP7mQ2xC9nL5vB9FK2" : "wax_live_••••••••••••••••••9FK2";
  });

  // Confirmation flow for API key regeneration
  let confirmCallback = null;
  const confirmModal = document.getElementById("confirmModal");
  const requestConfirmation = (title, text, callback) => {
    document.getElementById("confirmTitle").textContent = title;
    document.getElementById("confirmText").textContent = text;
    confirmCallback = callback;
    openModal(confirmModal);
  };
  document.getElementById("regenerateKey")?.addEventListener("click", () => requestConfirmation("Regenerate API key?", "Your current key will stop working immediately. Any live integrations using it must be updated.", () => {
    if (apiKeyValue) apiKeyValue.textContent = "wax_live_••••••••••••••••••Q7M4";
    showToast("New API key generated", "Update connected services before using it");
  }));
  document.getElementById("confirmAction")?.addEventListener("click", () => {
    confirmCallback?.();
    confirmCallback = null;
    closeModal(confirmModal);
  });

  // Integration filters and connection simulations
  document.querySelectorAll("[data-integration-filter]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-integration-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.integrationFilter;
    document.querySelectorAll("#appsGrid article").forEach((app) => { app.hidden = category !== "all" && app.dataset.category !== category; });
  }));
  document.querySelectorAll("[data-connect-channel]").forEach((button) => button.addEventListener("click", () => {
    const channel = button.dataset.connectChannel;
    button.innerHTML = '<i data-i="check"></i> Connected';
    button.classList.add("connected-action");
    renderIcons(button);
    showToast(`${channel} connected`, "The prototype connection is now active");
  }));

  // Flow builder interactions
  let flowZoom = 100;
  const flowMap = document.getElementById("flowMap");
  const zoomValue = document.getElementById("zoomValue");
  const updateZoom = () => {
    if (flowMap) flowMap.style.transform = `scale(${flowZoom / 100})`;
    if (zoomValue) zoomValue.textContent = `${flowZoom}%`;
  };
  document.getElementById("zoomIn")?.addEventListener("click", () => { flowZoom = Math.min(130, flowZoom + 10); updateZoom(); });
  document.getElementById("zoomOut")?.addEventListener("click", () => { flowZoom = Math.max(60, flowZoom - 10); updateZoom(); });
  document.querySelectorAll("[draggable][data-node]").forEach((node) => {
    node.addEventListener("dragstart", (event) => event.dataTransfer?.setData("text/plain", node.dataset.node));
  });
  document.getElementById("flowCanvas")?.addEventListener("dragover", (event) => event.preventDefault());
  document.getElementById("flowCanvas")?.addEventListener("drop", (event) => {
    event.preventDefault();
    const type = event.dataTransfer?.getData("text/plain") || "message";
    showToast(`${type[0].toUpperCase() + type.slice(1)} node added`, "Connect it to continue the flow");
  });
  document.getElementById("publishFlow")?.addEventListener("click", () => showToast("Flow published", "Incoming product enquiries now use this routing"));

  // AI Center tabs and simple option states
  document.querySelectorAll("[data-ai-tab]").forEach((tab) => tab.addEventListener("click", () => {
    document.querySelectorAll("[data-ai-tab]").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".ai-tab-panel").forEach((panel) => panel.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`ai-tab-${tab.dataset.aiTab}`)?.classList.add("active");
  }));
  document.querySelectorAll(".tone-options button").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".tone-options button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    showToast(`Tone set to ${button.textContent}`);
  }));
  document.querySelectorAll(".policy-card").forEach((card) => card.addEventListener("click", () => {
    document.querySelectorAll(".policy-card").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
  }));
  document.querySelectorAll("[data-analytics-tab]").forEach((tab) => tab.addEventListener("click", () => {
    document.querySelectorAll("[data-analytics-tab]").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    showToast(`${tab.textContent.trim()} analytics loaded`, "Charts updated for the selected view");
  }));

  // Miscellaneous workspace actions
  document.getElementById("saveSettings")?.addEventListener("click", () => showToast("Settings saved", "Workspace defaults are up to date"));
  document.getElementById("inviteAgent")?.addEventListener("click", () => showToast("Invite link created", "Copy and share it with your teammate"));
  document.querySelectorAll(".switch").forEach((toggle) => toggle.addEventListener("change", () => {
    showToast(toggle.checked ? "Setting enabled" : "Setting disabled", "This prototype updated the workspace preference");
  }));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) closeMobileSidebar();
    if (window.innerWidth > 1180) body.classList.remove("ai-dock-open");
  });
});
