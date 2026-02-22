---
layout: page
title: Portfolio
permalink: /portfolio/
feature-img: "assets/img/pexels/math.jpg"
lang: it
lang_ref: portfolio
tags: [Page]
---

{% assign projects = site.portfolio | where: "lang", "it" | sort: "date" | reverse %}
{% for project in projects %}
  <article>
    <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
    {{ project.excerpt }}
  </article>
{% endfor %}

<style>
  /* Zoom dolce per la feature image */
  .feature-image img {
    transition: transform 0.5s ease !important;
  }
  .feature-image:hover img {
    transform: scale(1.02) !important;
  }
</style>