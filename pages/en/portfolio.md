---
layout: page
title: Portfolio
permalink: /en/portfolio/
subtitle: "Projects I am working on"
feature-img: "assets/img/pexels/computer.jpeg"
position: 3
tags: [Page]
lang: en
lang_ref: portfolio
---

<div class="about-content" markdown="1">
  <div class="post-lang-switch is-en">
    <div class="lang-indicator"></div>
    <a class="lang-option" href="{{ '/portfolio/' | relative_url }}" data-set-lang="it" aria-label="Italiano">IT</a>
    <a class="lang-option is-active" href="{{ '/en/portfolio/' | relative_url }}" data-set-lang="en" aria-label="English">EN</a>
  </div>

{% include portfolio.html %}
</div>

<style>
  /* Smooth zoom for feature image */
  .feature-image img {
    transition: transform 0.5s ease !important;
  }
  .feature-image:hover img {
    transform: scale(1.02) !important;
  }
</style>
