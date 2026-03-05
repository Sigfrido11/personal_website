(() => {
  const EMBED_SELECTOR = "[data-youtube-embed]";

  function extractYouTubeId(input) {
    if (!input) return null;
    const value = String(input).trim();

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
      // ignore parse errors
    }

    const match =
      value.match(/[?&]v=([a-zA-Z0-9_-]{11})/) ||
      value.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/) ||
      value.match(/\/embed\/([a-zA-Z0-9_-]{11})/) ||
      value.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  }

  function buildEmbedSrc(id) {
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
    });
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${params.toString()}`;
  }

  function initEmbed(el) {
    const url = el.getAttribute("data-youtube-url");
    const id = extractYouTubeId(url);
    if (!id) return;

    const poster = el.querySelector(".yt-embed__poster");
    if (poster instanceof HTMLElement) {
      poster.style.backgroundImage = `url(https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg)`;
    }

    el.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest(".yt-embed__poster")) return;

      const iframe = document.createElement("iframe");
      iframe.className = "yt-embed__iframe";
      iframe.title = "YouTube video player";
      iframe.src = buildEmbedSrc(id);
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;

      el.classList.add("is-playing");
      el.textContent = "";
      el.appendChild(iframe);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(EMBED_SELECTOR).forEach((el) => {
      if (el instanceof HTMLElement) initEmbed(el);
    });
  });
})();

