---
layout: page
title: Portfolio
permalink: /portfolio/
feature-img: "assets/img/pexels/computer.jpeg"
subtitle: "Progetti a cui sto lavorando"
lang: it
lang_ref: portfolio
tags: [Page]
---


<div class="about-content" markdown="1">
  <div class="post-lang-switch">
    <div class="lang-indicator"></div>
    <a class="lang-option is-active" href="{{ '/about/' | relative_url }}" data-set-lang="it" aria-label="Italiano">IT</a>
    <a class="lang-option" href="{{ '/en/about/' | relative_url }}" data-set-lang="en" aria-label="English">EN</a>
  </div>

{% include portfolio.html %}
</div>
<style>
  /* Soft zoom for feature image */
  .feature-image img {
    transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .feature-image:hover img {
    transform: scale(1.04);
  }
</style>