(() => {
  const OPEN_SELECTOR = "[data-youtube-open]";
  const BACKDROP_SELECTOR = "[data-youtube-backdrop]";
  const CLOSE_SELECTOR = "[data-youtube-close]";
  const IFRAME_SELECTOR = "[data-youtube-iframe]";

  const state = {
    activeBackdrop: null,
    lastFocused: null,
  };

  function extractYouTubeId(input) {
    if (!input) return null;
    const value = String(input).trim();

    // Raw video id (most common length)
    if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;

    try {
      const url = new URL(value, window.location.href);
      const host = url.hostname.replace(/^www\./, "");

      if (host === "youtu.be") {
        const id = url.pathname.split("/").filter(Boolean)[0];
        return id || null;
      }

      if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
        const v = url.searchParams.get("v");
        if (v) return v;

        const parts = url.pathname.split("/").filter(Boolean);
        const embedIndex = parts.indexOf("embed");
        if (embedIndex >= 0 && parts[embedIndex + 1]) return parts[embedIndex + 1];

        const shortsIndex = parts.indexOf("shorts");
        if (shortsIndex >= 0 && parts[shortsIndex + 1]) return parts[shortsIndex + 1];
      }
    } catch {
      // Ignore parse errors; fall back below
    }

    // Fallback regexes for odd formats
    const match =
      value.match(/[?&]v=([a-zA-Z0-9_-]{11})/) ||
      value.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/) ||
      value.match(/\/embed\/([a-zA-Z0-9_-]{11})/) ||
      value.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  }

  function toEmbedUrl(inputUrl) {
    const id = extractYouTubeId(inputUrl);
    if (!id) return null;
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
    });
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${params.toString()}`;
  }

  function openBackdrop(backdrop, youtubeUrl) {
    if (!backdrop) return;

    const iframe = backdrop.querySelector(IFRAME_SELECTOR);
    const embedUrl = toEmbedUrl(youtubeUrl);
    if (!embedUrl || !iframe) return;

    state.lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    state.activeBackdrop = backdrop;

    iframe.src = embedUrl;
    backdrop.hidden = false;
    document.documentElement.classList.add("ytm-no-scroll");

    const closeBtn = backdrop.querySelector(CLOSE_SELECTOR);
    if (closeBtn instanceof HTMLElement) closeBtn.focus();
  }

  function closeActiveBackdrop() {
    const backdrop = state.activeBackdrop;
    if (!backdrop) return;

    const iframe = backdrop.querySelector(IFRAME_SELECTOR);
    if (iframe) iframe.src = "";

    backdrop.hidden = true;
    document.documentElement.classList.remove("ytm-no-scroll");
    state.activeBackdrop = null;

    if (state.lastFocused) state.lastFocused.focus();
    state.lastFocused = null;
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const openBtn = target.closest(OPEN_SELECTOR);
    if (openBtn) {
      const youtubeUrl = openBtn.getAttribute("data-youtube-url");
      const modalId = openBtn.getAttribute("data-youtube-modal-id");
      const backdrop = modalId ? document.getElementById(modalId) : null;
      openBackdrop(backdrop, youtubeUrl);
      return;
    }

    const closeBtn = target.closest(CLOSE_SELECTOR);
    if (closeBtn) {
      closeActiveBackdrop();
      return;
    }

    const backdrop = target.closest(BACKDROP_SELECTOR);
    if (backdrop && target === backdrop) {
      closeActiveBackdrop();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeActiveBackdrop();
  });
})();

